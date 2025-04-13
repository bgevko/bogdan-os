/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

import HelpScreen from '@/apps/headers/components/help-screen';
import useHeadersStore from '@/apps/headers/store';
import cn from '@/utils/format';

const Headers = (): React.ReactElement => {
  /*
   ********************************
   *             Store            *
   ********************************
   */
  const savedCenter = useHeadersStore((state) => state.getCenter());
  const savedSides = useHeadersStore((state) => state.getSides());
  const savedLength = useHeadersStore((state) => state.getLength());
  const savedPadding = useHeadersStore((state) => state.getPadding());
  const savedWrap = useHeadersStore((state) => state.getWrap());
  const setSavedCenter = useHeadersStore((state) => state.setCenter);
  const setSavedSides = useHeadersStore((state) => state.setSides);
  const setSavedLength = useHeadersStore((state) => state.setLength);
  const setSavedPadding = useHeadersStore((state) => state.setPadding);
  const setSavedWrap = useHeadersStore((state) => state.setWrap);
  const showHelpFlag = useHeadersStore((state) => state.getShowHelpFlag());
  const setShowHelpFlag = useHeadersStore((state) => state.setShowHelpFlag);
  const resetFlag = useHeadersStore((state) => state.getResetFlag());

  /*
   ********************************
   *          Local State         *
   ********************************
   */
  const [center, setCenter] = useState<string>(savedCenter);
  const [sides, setSides] = useState<string>(savedSides);
  const [lengthInput, setLengthInput] = useState<string>(savedLength);
  const [paddingInput, setPaddingInput] = useState<string>(savedPadding);
  const [wrapInput, setWrapInput] = useState<string>(savedWrap);
  const [content, setContent] = useState<string>('Headers');

  const [didCopy, setDidCopy] = useState<boolean>(false);
  const [isCopying, setIsCopying] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const centerRef = useRef<HTMLInputElement>(null);
  const sidesRef = useRef<HTMLInputElement>(null);
  const lengthInputRef = useRef<HTMLInputElement>(null);
  const paddingInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  /*
   ********************************
   *             Reset            *
   ********************************
   */
  useEffect(() => {
    if (resetFlag) {
      setCenter(useHeadersStore.getState().getCenter());
      setSides(useHeadersStore.getState().getSides());
      setLengthInput(useHeadersStore.getState().getLength());
      setPaddingInput(useHeadersStore.getState().getPadding());
      setWrapInput(useHeadersStore.getState().getWrap());
      useHeadersStore.getState().setResetFlag(false);
    }
  }, [resetFlag]);
  /*
   ********************************
   *                              *
   *             Memos            *
   *                              *
   ********************************
   */
  const length = useMemo(() => {
    const min = content.length + sides.length * 2 + 4;
    const max = 100;
    const inputVal = lengthInput === '' ? 0 : Number.parseInt(lengthInput, 10);
    return Math.min(Math.max(inputVal, min), max);
  }, [lengthInput, content, sides]);

  const padding = useMemo(() => {
    const min = 0;
    const max = 10;
    const paddingVal = paddingInput === '' ? 0 : Number.parseInt(paddingInput, 10);
    return Math.min(Math.max(paddingVal, min), max);
  }, [paddingInput]);

  const formattedOutput = useMemo(() => {
    // Height of the header block is 3 at the minimum, + 2 per each padding (one for top and one for bototm)
    const height = 3 + padding * 2;
    const centerIndex = Math.floor(height / 2);

    // First and last line are always the center strings
    // The sides is always the first and last character of all lines except first and last
    // the content is the center line
    // All other lines not content or center start with sides, get filled with spaces, end with sides
    let output = '';
    for (let i = 0; i < height; i++) {
      // First and last line
      if (i === 0 || i === height - 1) {
        output += `${center.repeat(length)}\n`;
      }

      // Padded line, sides + spaces + sides
      else if (i === centerIndex) {
        const spaces = length - content.length - sides.length * 2;
        const spacesLeft = spaces - Math.floor(spaces / 2);
        const spacesRight = spaces - spacesLeft;
        output += `${sides}${' '.repeat(spacesLeft)}${content}${' '.repeat(spacesRight)}${sides}\n`;
      }

      // Center line, which is sides + content + sides, but content is centered
      else {
        output += `${sides}${' '.repeat(length - sides.length * 2)}${sides}\n`;
      }
    }

    // add the wrap if it's not empty
    if (wrapInput !== '') {
      output = `${wrapInput}\n${output}${Array.from(wrapInput).reverse().join('')}\n`;
    }
    return output;
  }, [center, sides, length, padding, content, wrapInput]);

  /*
   ********************************
   *                              *
   *           Callbacks          *
   *                              *
   ********************************
   */
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(formattedOutput);
    setDidCopy(true);
  }, [formattedOutput]);

  const isHorizontalOverflow = useCallback(() => {
    if (outputRef.current) {
      return outputRef.current.scrollWidth > outputRef.current.clientWidth;
    }
    return false;
  }, []);

  const isVerticalOverflow = useCallback(() => {
    if (outputRef.current) {
      return outputRef.current.scrollHeight > outputRef.current.clientHeight;
    }
    return false;
  }, []);

  /*
   ********************************
   *                              *
   *          UseEffects          *
   *                              *
   ********************************
   */

  // Save to store on unmount
  useEffect(() => {
    // nothing to do when mounts
    // pass
    //
    return () => {
      setSavedCenter(center);
      setSavedSides(sides);
      setSavedLength(length.toString());
      setSavedPadding(padding.toString());
      setSavedWrap(wrapInput);
    };
  }, [
    center,
    sides,
    length,
    padding,
    wrapInput,
    setSavedCenter,
    setSavedSides,
    setSavedLength,
    setSavedPadding,
    setSavedWrap,
  ]);

  // Enter key when content is focused should copy the output
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && document.activeElement === contentRef.current) {
        e.preventDefault();
        handleCopy();

        contentRef.current?.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCopy]);

  /*
   ********************************
   *                              *
   *            Render            *
   *                              *
   ********************************
   */
  return (
    <section
      className="relative flex size-full flex-col items-center gap-3 rounded-b-lg bg-white p-4"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="my-2 w-full border-b text-2xl font-bold">Options</h2>
      <form className="mb-2 flex flex-col gap-4">
        <div className="flex gap-2">
          {/* Text input for Center */}
          <fieldset className="relative">
            <input
              ref={centerRef}
              className={cn('w-20 rounded-md border p-2 pl-2 select-none')}
              maxLength={1}
              value={center}
              onChange={(e) => {
                setCenter(e.target.value);
              }}
              onClick={() => {
                centerRef.current?.select();
                setDidCopy(false);
              }}
              onFocus={() => {
                centerRef.current?.select();
              }}
            />
            <p className="absolute left-[9px] top-[-9px] bg-white text-sm font-bold text-gray-500">
              Center
            </p>
          </fieldset>
          {/* Text input for Sides */}
          <fieldset className="relative">
            <input
              ref={sidesRef}
              className={cn('w-20 rounded-md border p-2 pl-2 select-none')}
              value={sides}
              onChange={(e) => {
                setSides(e.target.value);
              }}
              onClick={() => {
                sidesRef.current?.select();
                setDidCopy(false);
              }}
              onFocus={() => {
                sidesRef.current?.select();
              }}
            />
            <p className="absolute left-[9px] top-[-9px] bg-white text-sm font-bold text-gray-500">
              Sides
            </p>
          </fieldset>
          {/* Number input for Length */}
          <fieldset className="relative">
            <input
              ref={lengthInputRef}
              className={cn('w-20 rounded-md border p-2 pl-2 select-none')}
              type="number"
              value={lengthInput}
              min={0}
              onChange={(e) => {
                setLengthInput(e.target.value);
              }}
              onClick={() => {
                lengthInputRef.current?.select();
                setDidCopy(false);
              }}
              onFocus={() => {
                lengthInputRef.current?.select();
              }}
            />
            <p className="absolute left-[9px] top-[-9px] bg-white text-sm font-bold text-gray-500">
              Length
            </p>
          </fieldset>
          {/* Number input for Padding */}
          <fieldset className="relative">
            <input
              ref={paddingInputRef}
              className={cn('w-20 rounded-md border p-2 pl-2 select-none')}
              type="number"
              value={paddingInput}
              onChange={(e) => {
                setPaddingInput(e.target.value);
              }}
              onClick={() => {
                paddingInputRef.current?.select();
                setDidCopy(false);
              }}
              onFocus={() => {
                paddingInputRef.current?.select();
              }}
            />
            <p className="absolute left-[9px] top-[-9px] bg-white text-sm font-bold text-gray-500">
              Padding
            </p>
          </fieldset>
          {/* Text input for Wrap */}
          <fieldset className="relative">
            <input
              ref={wrapRef}
              className={cn('w-20 rounded-md border p-2 pl-2 select-none')}
              value={wrapInput}
              onChange={(e) => {
                setWrapInput(e.target.value);
              }}
              onClick={() => {
                wrapRef.current?.select();
                setDidCopy(false);
              }}
              onFocus={() => {
                wrapRef.current?.select();
              }}
            />
            <p className="absolute left-[9px] top-[-9px] bg-white text-sm font-bold text-gray-500">
              Wrap
            </p>
          </fieldset>
        </div>

        {/* Text area input for Content */}
        <fieldset className="relative">
          <input
            ref={contentRef}
            className={cn('w-full rounded-md border p-2 pl-2 select-none')}
            value={content}
            maxLength={100}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            onClick={() => {
              contentRef.current?.select();
              setDidCopy(false);
            }}
            onFocus={() => {
              contentRef.current?.select();
            }}
          />
          <p className="absolute left-[9px] top-[-10px] bg-white text-sm font-bold text-gray-500">
            Content
          </p>
        </fieldset>
      </form>
      <h2 className="mb-2 w-full border-b text-2xl font-bold">Output</h2>
      <div className="relative w-full">
        <button
          type="button"
          className={cn(
            'absolute right-2 top-[-2px] w-[120px] cursor-pointer select-none rounded-md border bg-white px-2 py-1 text-sm font-bold text-gray-800',
            isCopying && 'text-orange-800',
          )}
          onClick={handleCopy}
          onMouseDown={() => {
            setIsCopying(true);
          }}
          onMouseUp={() => {
            setIsCopying(false);
          }}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          {didCopy && 'Copied!'}
          {!didCopy && 'Click to Copy'}
        </button>
      </div>
      <div
        ref={outputRef}
        className={cn(
          'flex size-full  items-center justify-center overflow-auto rounded-md border bg-gray-50 p-2 cursor-pointer',
          // eslint-disable-next-line react-compiler/react-compiler
          isHorizontalOverflow() && 'justify-start',
          // eslint-disable-next-line react-compiler/react-compiler
          isVerticalOverflow() && 'items-start',
          isCopying && 'bg-gray-200',
          !isCopying && didCopy && 'bg-white',
          isHovering && !isCopying && !didCopy && 'bg-gray-200',
        )}
        onClick={handleCopy}
        onMouseDown={() => {
          setIsCopying(true);
        }}
        onMouseUp={() => {
          setIsCopying(false);
        }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <pre className="flex">{formattedOutput}</pre>
      </div>
      {showHelpFlag && (
        <HelpScreen
          onClose={() => {
            setShowHelpFlag(false);
          }}
        />
      )}
    </section>
  );
};

export default Headers;
