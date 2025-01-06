import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import useEditorStore from '@/system/text-editor/store';
import { ParagraphNode, TextNode } from '@/system/text-editor/types';

describe('useEditorStore', () => {
  const { result } = renderHook(() => useEditorStore());
  const store = result.current;
  /*
   ********************************
   *             init             *
   ********************************
   */
  it('should init correctly', () => {
    act(() => {
      expect(store).toBeDefined();
      expect(store.documentNode).toEqual({
        node: 'document',
        id: 'root',
        children: [],
      });
    });
  });

  /*
   ********************************
   *                              *
   *     Insert / Delete Nodes    *
   *                              *
   ********************************
   */
  it('should insert / delete nodes correctly', () => {
    act(() => {
      /*
       ********************************
       *            insert            *
       ********************************
       */
      const paragraphNode: ParagraphNode = {
        node: 'paragraph',
        id: 'paragraph-1',
        children: [],
      };
      const textNode: TextNode = {
        node: 'text',
        id: 'text-1',
        text: 'Hello World',
      };
      store.insertNode('root', paragraphNode);
      let pNode = store.getNode('paragraph-1');
      expect(pNode).toBeDefined();
      expect(pNode).toEqual(paragraphNode);
      let docNode = store.getNode('root');
      expect(docNode).toEqual({
        node: 'document',
        id: 'root',
        children: [
          {
            node: 'paragraph',
            id: 'paragraph-1',
            children: [],
          },
        ],
      });
      store.insertNode('paragraph-1', textNode);
      const tNode = store.getNode('text-1');
      pNode = store.getNode('paragraph-1');
      docNode = store.getNode('root');
      expect(tNode).toBeDefined();
      expect(tNode).toEqual(textNode);
      expect(pNode).toEqual({
        node: 'paragraph',
        id: 'paragraph-1',
        children: [
          {
            node: 'text',
            id: 'text-1',
            text: 'Hello World',
          },
        ],
      });
      expect(docNode).toEqual({
        node: 'document',
        id: 'root',
        children: [
          {
            node: 'paragraph',
            id: 'paragraph-1',
            children: [
              {
                node: 'text',
                id: 'text-1',
                text: 'Hello World',
              },
            ],
          },
        ],
      });

      /*
       ********************************
       *            delete            *
       ********************************
       */
      store.deleteNode('text-1');
      expect(store.getNode('text-1')).toBeNull();
      store.deleteNode('paragraph-1');
      expect(store.getNode('paragraph-1')).toBeNull();

      // nested deletion.
      store.insertNode('root', paragraphNode);
      store.insertNode('paragraph-1', textNode);
      expect(store.getNode('paragraph-1')).toBeDefined();
      expect(store.getNode('text-1')).toBeDefined();
      store.deleteNode('paragraph-1');
      expect(store.getNode('paragraph-1')).toBeNull();
      expect(store.getNode('text-1')).toBeNull();
    });
  });

  /*
   ********************************
   *                              *
   *         Update Nodes         *
   *                              *
   ********************************
   */
  it('should update nodes correctly', () => {
    act(() => {
      store.clearDocument();
      const paragraphNode: ParagraphNode = {
        node: 'paragraph',
        id: 'paragraph-1',
        children: [],
      };
      const textNode: TextNode = {
        node: 'text',
        id: 'text-1',
        text: 'Hello World',
      };
      store.insertNode('root', paragraphNode);
      store.insertNode('paragraph-1', textNode);

      // Change text node to say "Hello World!"
      store.updateNode('text-1', {
        text: 'Hello World!',
      });
      expect(store.getNode('text-1')).toEqual({
        node: 'text',
        id: 'text-1',
        text: 'Hello World!',
      });

      // Make it bold
      store.updateNode('text-1', {
        bold: true,
      });
      expect(store.getNode('text-1')).toEqual({
        node: 'text',
        id: 'text-1',
        text: 'Hello World!',
        bold: true,
      });

      // change paragraph node type to a 'list'
      store.updateNode('paragraph-1', {
        node: 'list',
        id: 'list-1',
      });
      expect(store.getNode('paragraph-1')).toBeNull();
      expect(store.getNode('list-1')).toEqual({
        node: 'list',
        id: 'list-1',
        children: [
          {
            node: 'text',
            id: 'text-1',
            text: 'Hello World!',
            bold: true,
          },
        ],
      });
    });
  });

  /*
   ********************************
   *                              *
   *        Traverse Nodes        *
   *                              *
   ********************************
   */
  it('should apply a callback to all nodes correctly', () => {
    act(() => {
      store.clearDocument();
      const paragraphNode: ParagraphNode = {
        node: 'paragraph',
        id: 'paragraph-1',
        children: [],
      };
      const textNode: TextNode = {
        node: 'text',
        id: 'text-1',
        text: 'Hello World',
      };
      const textNode2: TextNode = {
        node: 'text',
        id: 'text-2',
        text: 'yooooo',
      };
      store.insertNode('root', paragraphNode);
      store.insertNode('paragraph-1', textNode);
      store.insertNode('paragraph-1', textNode2);
      store.traverseNodes(store.getNode('root'), (node) => {
        if (node.node === 'text') {
          store.updateNode(node.id, {
            text: `${node.text}!`,
            bold: true,
          });
        }
      });
      expect(store.getNode('text-1')).toEqual({
        node: 'text',
        id: 'text-1',
        text: 'Hello World!',
        bold: true,
      });
      expect(store.getNode('text-2')).toEqual({
        node: 'text',
        id: 'text-2',
        text: 'yooooo!',
        bold: true,
      });
    });
  });
});
