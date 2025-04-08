import { E as e } from './KJnl7Sfk.js';
import './CTNqAv02.js';
const p = Object.freeze({
    displayName: 'JavaScript',
    name: 'javascript',
    patterns: [{ include: '#directives' }, { include: '#statements' }, { include: '#shebang' }],
    repository: {
      'access-modifier': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'storage.modifier.js',
      },
      'after-operator-block-as-object-literal': {
        begin: new RegExp(
          '(?<!\\+\\+|--)(?<=[\\:\\=\\(\\,\\[\\?\\+\\!\\>]|^await|[^\\._\\$\\p{Alpha}\\p{Nd}]await|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^yield|[^\\._\\$\\p{Alpha}\\p{Nd}]yield|^throw|[^\\._\\$\\p{Alpha}\\p{Nd}]throw|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^typeof|[^\\._\\$\\p{Alpha}\\p{Nd}]typeof|&&|\\|\\||\\*)\\p{space}*(\\{)',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'meta.objectliteral.js',
        patterns: [{ include: '#object-member' }],
      },
      'array-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.array.js' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.js' } },
        patterns: [{ include: '#binding-element' }, { include: '#punctuation-comma' }],
      },
      'array-binding-pattern-const': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.array.js' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.js' } },
        patterns: [{ include: '#binding-element-const' }, { include: '#punctuation-comma' }],
      },
      'array-literal': {
        begin: new RegExp('\\p{space}*(\\[)', 'dgv'),
        beginCaptures: { 1: { name: 'meta.brace.square.js' } },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.square.js' } },
        name: 'meta.array.literal.js',
        patterns: [{ include: '#expression' }, { include: '#punctuation-comma' }],
      },
      'arrow-function': {
        patterns: [
          {
            captures: {
              1: { name: 'storage.modifier.async.js' },
              2: { name: 'variable.parameter.js' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\p{space}+)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?==>)',
              'dgv',
            ),
            name: 'meta.arrow.js',
          },
          {
            begin: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![\\}\\)\\!\\]])\\p{space}*(?=((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.js' } },
            end: new RegExp(
              '(?==>|\\{|(^\\p{space}*(export|function|class|interface|let|var|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|const|import|enum|namespace|module|type|abstract|declare)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.arrow.js',
            patterns: [
              { include: '#comment' },
              { include: '#type-parameters' },
              { include: '#function-parameters' },
              { include: '#arrow-return-type' },
              { include: '#possibly-arrow-return-type' },
            ],
          },
          {
            begin: new RegExp('=>', 'dgv'),
            beginCaptures: { 0: { name: 'storage.type.function.arrow.js' } },
            end: new RegExp(
              '((?<=\\}|\\P{space})(?<!=>)|((?!\\{)(?=\\P{space})))(?!\\/[\\/\\*])',
              'dgv',
            ),
            name: 'meta.arrow.js',
            patterns: [
              { include: '#single-line-comment-consuming-line-ending' },
              { include: '#decl-block' },
              { include: '#expression' },
            ],
          },
        ],
      },
      'arrow-return-type': {
        begin: new RegExp('(?<=\\))\\p{space}*(:)', 'dgv'),
        beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
        end: new RegExp(
          '(?==>|\\{|(^\\p{space}*(export|function|class|interface|let|var|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|const|import|enum|namespace|module|type|abstract|declare)\\p{space}+))',
          'dgv',
        ),
        name: 'meta.return.type.arrow.js',
        patterns: [{ include: '#arrow-return-type-body' }],
      },
      'arrow-return-type-body': {
        patterns: [
          {
            begin: new RegExp('(?<=[\\:])(?=\\p{space}*\\{)', 'dgv'),
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#type-object' }],
          },
          { include: '#type-predicate-operator' },
          { include: '#type' },
        ],
      },
      'async-modifier': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(async)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'storage.modifier.async.js',
      },
      'binding-element': {
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          { include: '#numeric-literal' },
          { include: '#regex' },
          { include: '#object-binding-pattern' },
          { include: '#array-binding-pattern' },
          { include: '#destructuring-variable-rest' },
          { include: '#variable-initializer' },
        ],
      },
      'binding-element-const': {
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          { include: '#numeric-literal' },
          { include: '#regex' },
          { include: '#object-binding-pattern-const' },
          { include: '#array-binding-pattern-const' },
          { include: '#destructuring-variable-rest-const' },
          { include: '#variable-initializer' },
        ],
      },
      'boolean-literal': {
        patterns: [
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))true(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.boolean.true.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.boolean.false.js',
          },
        ],
      },
      brackets: {
        patterns: [
          {
            begin: new RegExp('\\{', 'dgv'),
            end: new RegExp('\\}|(?=\\*\\/)', 'dgv'),
            patterns: [{ include: '#brackets' }],
          },
          {
            begin: new RegExp('\\[', 'dgv'),
            end: new RegExp('\\]|(?=\\*\\/)', 'dgv'),
            patterns: [{ include: '#brackets' }],
          },
        ],
      },
      cast: { patterns: [{ include: '#jsx' }] },
      'class-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(?:(abstract)\\p{space}+)?\\b(class)\\b(?=\\p{space}+|\\/[\\/\\*])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.modifier.js' },
          4: { name: 'storage.type.class.js' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.class.js',
        patterns: [{ include: '#class-declaration-or-expression-patterns' }],
      },
      'class-declaration-or-expression-patterns': {
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          {
            captures: { 0: { name: 'entity.name.type.class.js' } },
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
          },
          { include: '#type-parameters' },
          { include: '#class-or-interface-body' },
        ],
      },
      'class-expression': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\p{space}+)?(class)\\b(?=\\p{space}+|[\\<\\{]|\\/[\\/\\*])',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'storage.modifier.js' }, 2: { name: 'storage.type.class.js' } },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.class.js',
        patterns: [{ include: '#class-declaration-or-expression-patterns' }],
      },
      'class-or-interface-body': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        patterns: [
          { include: '#comment' },
          { include: '#decorator' },
          {
            begin: new RegExp('(?<=:)\\p{space}*', 'dgv'),
            end: new RegExp(
              '(?=\\p{space}|[\\;\\)\\,\\}\\]\\:\\-\\+]|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
          { include: '#method-declaration' },
          { include: '#indexer-declaration' },
          { include: '#field-declaration' },
          { include: '#string' },
          { include: '#type-annotation' },
          { include: '#variable-initializer' },
          { include: '#access-modifier' },
          { include: '#property-accessor' },
          { include: '#async-modifier' },
          { include: '#after-operator-block-as-object-literal' },
          { include: '#decl-block' },
          { include: '#expression' },
          { include: '#punctuation-comma' },
          { include: '#punctuation-semicolon' },
        ],
      },
      'class-or-interface-heritage': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))\\b(extends|implements)\\b(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'storage.modifier.js' } },
        end: new RegExp('(?=\\{)', 'dgv'),
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          { include: '#type-parameters' },
          { include: '#expressionWithoutIdentifiers' },
          {
            captures: {
              1: { name: 'entity.name.type.module.js' },
              2: { name: 'punctuation.accessor.js' },
              3: { name: 'punctuation.accessor.optional.js' },
            },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))(?=\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*(\\p{space}*\\??\\.\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)*\\p{space}*)',
              'dgv',
            ),
          },
          {
            captures: { 1: { name: 'entity.other.inherited-class.js' } },
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
          },
          { include: '#expressionPunctuations' },
        ],
      },
      comment: {
        patterns: [
          {
            begin: new RegExp('\\/\\*\\*(?!\\/)', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.comment.js' } },
            end: new RegExp('\\*\\/', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.comment.js' } },
            name: 'comment.block.documentation.js',
            patterns: [{ include: '#docblock' }],
          },
          {
            begin: new RegExp(
              '(\\/\\*)(?:\\p{space}*((@)internal)(?=\\p{space}|(\\*\\/)))?',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'punctuation.definition.comment.js' },
              2: { name: 'storage.type.internaldeclaration.js' },
              3: { name: 'punctuation.decorator.internaldeclaration.js' },
            },
            end: new RegExp('\\*\\/', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.comment.js' } },
            name: 'comment.block.js',
          },
          {
            begin: new RegExp(
              '(^[ \\t]+)?((\\/\\/)(?:\\p{space}*((@)internal)(?=\\p{space}|(?=\\n?$)))?)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'punctuation.whitespace.comment.leading.js' },
              2: { name: 'comment.line.double-slash.js' },
              3: { name: 'punctuation.definition.comment.js' },
              4: { name: 'storage.type.internaldeclaration.js' },
              5: { name: 'punctuation.decorator.internaldeclaration.js' },
            },
            contentName: 'comment.line.double-slash.js',
            end: new RegExp('(?=(?=\\n?$))', 'dgv'),
          },
        ],
      },
      'control-statement': {
        patterns: [
          { include: '#switch-statement' },
          { include: '#for-loop' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(catch|finally|throw|try)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.trycatch.js',
          },
          {
            captures: {
              1: { name: 'keyword.control.loop.js' },
              2: { name: 'entity.name.label.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|goto)\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(break|continue|do|goto|while)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.loop.js',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            beginCaptures: { 0: { name: 'keyword.control.flow.js' } },
            end: new RegExp(
              '(?=[\\;\\}]|(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default|switch)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.switch.js',
          },
          { include: '#if-statement' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.conditional.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.with.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.other.debugger.js',
          },
        ],
      },
      'decl-block': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'meta.block.js',
        patterns: [{ include: '#statements' }],
      },
      declaration: {
        patterns: [
          { include: '#decorator' },
          { include: '#var-expr' },
          { include: '#function-declaration' },
          { include: '#class-declaration' },
          { include: '#interface-declaration' },
          { include: '#enum-declaration' },
          { include: '#namespace-declaration' },
          { include: '#type-alias-declaration' },
          { include: '#import-equals-declaration' },
          { include: '#import-declaration' },
          { include: '#export-declaration' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(declare|export)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'storage.modifier.js',
          },
        ],
      },
      decorator: {
        begin: new RegExp('(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))@', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.decorator.js' } },
        end: new RegExp('(?=\\p{space})', 'dgv'),
        name: 'meta.decorator.js',
        patterns: [{ include: '#expression' }],
      },
      'destructuring-const': {
        patterns: [
          {
            begin: new RegExp(
              '(?<!=|:|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in)\\p{space}*(?=\\{)',
              'dgv',
            ),
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.object-binding-pattern-variable.js',
            patterns: [
              { include: '#object-binding-pattern-const' },
              { include: '#type-annotation' },
              { include: '#comment' },
            ],
          },
          {
            begin: new RegExp(
              '(?<!=|:|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in)\\p{space}*(?=\\[)',
              'dgv',
            ),
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.array-binding-pattern-variable.js',
            patterns: [
              { include: '#array-binding-pattern-const' },
              { include: '#type-annotation' },
              { include: '#comment' },
            ],
          },
        ],
      },
      'destructuring-parameter': {
        patterns: [
          {
            begin: new RegExp('(?<!=|:)\\p{space}*(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
            beginCaptures: {
              1: { name: 'keyword.operator.rest.js' },
              2: { name: 'punctuation.definition.binding-pattern.object.js' },
            },
            end: new RegExp('\\}', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.js' } },
            name: 'meta.parameter.object-binding-pattern.js',
            patterns: [{ include: '#parameter-object-binding-element' }],
          },
          {
            begin: new RegExp('(?<!=|:)\\p{space}*(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
            beginCaptures: {
              1: { name: 'keyword.operator.rest.js' },
              2: { name: 'punctuation.definition.binding-pattern.array.js' },
            },
            end: new RegExp('\\]', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.js' } },
            name: 'meta.paramter.array-binding-pattern.js',
            patterns: [
              { include: '#parameter-binding-element' },
              { include: '#punctuation-comma' },
            ],
          },
        ],
      },
      'destructuring-parameter-rest': {
        captures: { 1: { name: 'keyword.operator.rest.js' }, 2: { name: 'variable.parameter.js' } },
        match: new RegExp(
          '(?:(\\.\\.\\.)\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
          'dgv',
        ),
      },
      'destructuring-variable': {
        patterns: [
          {
            begin: new RegExp(
              '(?<!=|:|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in)\\p{space}*(?=\\{)',
              'dgv',
            ),
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.object-binding-pattern-variable.js',
            patterns: [
              { include: '#object-binding-pattern' },
              { include: '#type-annotation' },
              { include: '#comment' },
            ],
          },
          {
            begin: new RegExp(
              '(?<!=|:|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in)\\p{space}*(?=\\[)',
              'dgv',
            ),
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.array-binding-pattern-variable.js',
            patterns: [
              { include: '#array-binding-pattern' },
              { include: '#type-annotation' },
              { include: '#comment' },
            ],
          },
        ],
      },
      'destructuring-variable-rest': {
        captures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'meta.definition.variable.js variable.other.readwrite.js' },
        },
        match: new RegExp(
          '(?:(\\.\\.\\.)\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
          'dgv',
        ),
      },
      'destructuring-variable-rest-const': {
        captures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'meta.definition.variable.js variable.other.constant.js' },
        },
        match: new RegExp(
          '(?:(\\.\\.\\.)\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
          'dgv',
        ),
      },
      directives: {
        begin: new RegExp(
          '^(\\/\\/\\/)\\p{space}*(?=<(reference|amd-dependency|amd-module)(\\p{space}+(path|types|no-default-lib|lib|name|resolution-mode)\\p{space}*=\\p{space}*((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))+\\p{space}*\\/>\\p{space}*(?=\\n?$))',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'punctuation.definition.comment.js' } },
        end: new RegExp('(?=(?=\\n?$))', 'dgv'),
        name: 'comment.line.triple-slash.directive.js',
        patterns: [
          {
            begin: new RegExp('(<)(reference|amd-dependency|amd-module)', 'dgv'),
            beginCaptures: {
              1: { name: 'punctuation.definition.tag.directive.js' },
              2: { name: 'entity.name.tag.directive.js' },
            },
            end: new RegExp('\\/>', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.tag.directive.js' } },
            name: 'meta.tag.js',
            patterns: [
              {
                match: new RegExp('path|types|no-default-lib|lib|name|resolution-mode', 'dgv'),
                name: 'entity.other.attribute-name.directive.js',
              },
              { match: new RegExp('=', 'dgv'), name: 'keyword.operator.assignment.js' },
              { include: '#string' },
            ],
          },
        ],
      },
      docblock: {
        patterns: [
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'constant.language.access-type.jsdoc' },
            },
            match: new RegExp('((@)(?:access|api))\\p{space}+(private|protected|public)\\b', 'dgv'),
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'entity.name.type.instance.jsdoc' },
              4: { name: 'punctuation.definition.bracket.angle.begin.jsdoc' },
              5: { name: 'constant.other.email.link.underline.jsdoc' },
              6: { name: 'punctuation.definition.bracket.angle.end.jsdoc' },
            },
            match: new RegExp(
              '((@)author)\\p{space}+([^\\@\\p{space}\\<\\>\\*\\/](?:[^\\@\\<\\>\\*\\/]|\\*[^\\/])*)(?:\\p{space}*(<)([^\\>\\p{space}]+)(>))?',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'entity.name.type.instance.jsdoc' },
              4: { name: 'keyword.operator.control.jsdoc' },
              5: { name: 'entity.name.type.instance.jsdoc' },
            },
            match: new RegExp(
              '((@)borrows)\\p{space}+((?:[^\\@\\p{space}\\*\\/]|\\*[^\\/])+)\\p{space}+(as)\\p{space}+((?:[^\\@\\p{space}\\*\\/]|\\*[^\\/])+)',
              'dgv',
            ),
          },
          {
            begin: new RegExp('((@)example)\\p{space}+', 'dgv'),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            end: new RegExp('(?=@|\\*\\/)', 'dgv'),
            name: 'meta.example.jsdoc',
            patterns: [
              { match: new RegExp('^\\p{space}\\*\\p{space}+', 'dgv') },
              {
                begin: new RegExp('(<)caption(>)', 'dgvy'),
                beginCaptures: {
                  0: { name: 'entity.name.tag.inline.jsdoc' },
                  1: { name: 'punctuation.definition.bracket.angle.begin.jsdoc' },
                  2: { name: 'punctuation.definition.bracket.angle.end.jsdoc' },
                },
                contentName: 'constant.other.description.jsdoc',
                end: new RegExp('(<\\/)caption(>)|(?=\\*\\/)', 'dgv'),
                endCaptures: {
                  0: { name: 'entity.name.tag.inline.jsdoc' },
                  1: { name: 'punctuation.definition.bracket.angle.begin.jsdoc' },
                  2: { name: 'punctuation.definition.bracket.angle.end.jsdoc' },
                },
              },
              {
                captures: { 0: { name: 'source.embedded.js' } },
                match: new RegExp('[^\\p{space}\\@\\*](?:[^\\*]|\\*[^\\/])*', 'dgv'),
              },
            ],
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'constant.language.symbol-type.jsdoc' },
            },
            match: new RegExp(
              '((@)kind)\\p{space}+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\b',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'variable.other.link.underline.jsdoc' },
              4: { name: 'entity.name.type.instance.jsdoc' },
            },
            match: new RegExp(
              '((@)see)\\p{space}+(?:((?=https?:\\/\\/)(?:[^\\p{space}\\*]|\\*[^\\/])+)|((?!https?:\\/\\/|(?:\\[[^\\[\\]]*\\])?\\{@(?:link|linkcode|linkplain|tutorial)\\b)(?:[^\\@\\p{space}\\*\\/]|\\*[^\\/])+))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'variable.other.jsdoc' },
            },
            match: new RegExp(
              '((@)template)\\p{space}+([A-Za-z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$\\.\\[\\]]*(?:\\p{space}*,\\p{space}*[A-Za-z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$\\.\\[\\]]*)*)',
              'dgv',
            ),
          },
          {
            begin: new RegExp('((@)template)\\p{space}+(?=\\{)', 'dgv'),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            end: new RegExp('(?=\\p{space}|\\*\\/|[^\\{\\}\\[\\]A-Za-z_\\$])', 'dgv'),
            patterns: [
              { include: '#jsdoctype' },
              {
                match: new RegExp('([A-Za-z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$\\.\\[\\]]*)', 'dgv'),
                name: 'variable.other.jsdoc',
              },
            ],
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'variable.other.jsdoc' },
            },
            match: new RegExp(
              '((@)(?:arg|argument|const|constant|member|namespace|param|var))\\p{space}+([A-Za-z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$\\.\\[\\]]*)',
              'dgv',
            ),
          },
          {
            begin: new RegExp('((@)typedef)\\p{space}+(?=\\{)', 'dgv'),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            end: new RegExp('(?=\\p{space}|\\*\\/|[^\\{\\}\\[\\]A-Za-z_\\$])', 'dgv'),
            patterns: [
              { include: '#jsdoctype' },
              {
                match: new RegExp('(?:[^\\@\\p{space}\\*\\/]|\\*[^\\/])+', 'dgv'),
                name: 'entity.name.type.instance.jsdoc',
              },
            ],
          },
          {
            begin: new RegExp(
              '((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\p{space}+(?=\\{)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            end: new RegExp('(?=\\p{space}|\\*\\/|[^\\{\\}\\[\\]A-Za-z_\\$])', 'dgv'),
            patterns: [
              { include: '#jsdoctype' },
              {
                match: new RegExp('([A-Za-z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$\\.\\[\\]]*)', 'dgv'),
                name: 'variable.other.jsdoc',
              },
              {
                captures: {
                  1: { name: 'punctuation.definition.optional-value.begin.bracket.square.jsdoc' },
                  2: { name: 'keyword.operator.assignment.jsdoc' },
                  3: { name: 'source.embedded.js' },
                  4: { name: 'punctuation.definition.optional-value.end.bracket.square.jsdoc' },
                  5: { name: 'invalid.illegal.syntax.jsdoc' },
                },
                match: new e(
                  `(\\[)\\p{space}*[\\p{L}\\p{M}\\p{N}\\p{Pc}\\$]+(?:(?:\\[\\])?\\.[\\p{L}\\p{M}\\p{N}\\p{Pc}\\$]+)*(?:\\p{space}*(=)\\p{space}*((?:(?=("(?:\\*(?!/)|\\\\(?!")|[^\\*\\\\])*?"|'(?:\\*(?!/)|\\\\(?!')|[^\\*\\\\])*?'|\\[(?:\\*(?!/)|[^\\*])*?\\]|(?:\\*(?!/)|\\p{space}(?!\\p{space}*\\])|\\[[^\\n]*?(?:\\]|(?=\\*/))|[^\\*\\p{space}\\[\\]])*))\\4)*))?\\p{space}*(?:(\\])((?:[^\\*\\p{space}]|\\*[^\\p{space}\\/])+)?|(?=\\*/))`,
                  'dgv',
                  { hiddenCaptures: [4] },
                ),
                name: 'variable.other.jsdoc',
              },
            ],
          },
          {
            begin: new RegExp(
              '((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\p{space}+(?=\\{)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            end: new RegExp('(?=\\p{space}|\\*\\/|[^\\{\\}\\[\\]A-Za-z_\\$])', 'dgv'),
            patterns: [{ include: '#jsdoctype' }],
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'entity.name.type.instance.jsdoc' },
            },
            match: new RegExp(
              '((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\p{space}+((?:[^\\{\\}\\@\\p{space}\\*]|\\*[^\\/])+)',
              'dgv',
            ),
          },
          {
            begin: new RegExp(
              `((@)(?:default(?:value)?|license|version))\\p{space}+(([''"]))`,
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'variable.other.jsdoc' },
              4: { name: 'punctuation.definition.string.begin.jsdoc' },
            },
            contentName: 'variable.other.jsdoc',
            end: new RegExp('(\\3)|(?=(?=\\n?$)|\\*\\/)()()', 'dgv'),
            endCaptures: {
              0: { name: 'variable.other.jsdoc' },
              1: { name: 'punctuation.definition.string.end.jsdoc' },
            },
          },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
              3: { name: 'variable.other.jsdoc' },
            },
            match: new RegExp(
              '((@)(?:default(?:value)?|license|tutorial|variation|version))\\p{space}+([^\\p{space}\\*]+)',
              'dgv',
            ),
          },
          {
            captures: { 1: { name: 'punctuation.definition.block.tag.jsdoc' } },
            match: new RegExp(
              '(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\b',
              'dgv',
            ),
            name: 'storage.type.class.jsdoc',
          },
          { include: '#inline-tags' },
          {
            captures: {
              1: { name: 'storage.type.class.jsdoc' },
              2: { name: 'punctuation.definition.block.tag.jsdoc' },
            },
            match: new RegExp(
              '((@)[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}+)',
              'dgv',
            ),
          },
        ],
      },
      'enum-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?(?:\\b(const)\\p{space}+)?\\b(enum)\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.modifier.js' },
          4: { name: 'storage.type.enum.js' },
          5: { name: 'entity.name.type.enum.js' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.enum.declaration.js',
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp('\\{', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
            end: new RegExp('\\}', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
            patterns: [
              { include: '#comment' },
              {
                begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
                beginCaptures: { 0: { name: 'variable.other.enummember.js' } },
                end: new RegExp('(?=,|\\}|(?=\\n?$))', 'dgv'),
                patterns: [{ include: '#comment' }, { include: '#variable-initializer' }],
              },
              {
                begin: new RegExp(
                  '(?=((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\])))',
                  'dgv',
                ),
                end: new RegExp('(?=,|\\}|(?=\\n?$))', 'dgv'),
                patterns: [
                  { include: '#string' },
                  { include: '#array-literal' },
                  { include: '#comment' },
                  { include: '#variable-initializer' },
                ],
              },
              { include: '#punctuation-comma' },
            ],
          },
        ],
      },
      'export-declaration': {
        patterns: [
          {
            captures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'keyword.control.as.js' },
              3: { name: 'storage.type.namespace.js' },
              4: { name: 'entity.name.type.module.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)\\p{space}+(as)\\p{space}+(namespace)\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
              'dgv',
            ),
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\p{space}+(type))?(?:\\p{space}*(=)|\\p{space}+(default)(?=\\p{space}+))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'keyword.control.type.js' },
              3: { name: 'keyword.operator.assignment.js' },
              4: { name: 'keyword.control.default.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            name: 'meta.export.default.js',
            patterns: [{ include: '#interface-declaration' }, { include: '#expression' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\p{space}+(type))?\\b(?!(\\$)|(\\p{space}*:))((?=\\p{space}*[\\{\\*])|((?=\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*(\\p{space}|,))(?!\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'keyword.control.type.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            name: 'meta.export.js',
            patterns: [{ include: '#import-export-declaration' }],
          },
        ],
      },
      expression: {
        patterns: [
          { include: '#expressionWithoutIdentifiers' },
          { include: '#identifiers' },
          { include: '#expressionPunctuations' },
        ],
      },
      'expression-inside-possibly-arrow-parens': {
        patterns: [
          { include: '#expressionWithoutIdentifiers' },
          { include: '#comment' },
          { include: '#string' },
          { include: '#decorator' },
          { include: '#destructuring-parameter' },
          {
            captures: { 1: { name: 'storage.modifier.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\p{space}+(?=(override|public|protected|private|readonly)\\p{space}+)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'entity.name.function.js variable.language.this.js' },
              4: { name: 'entity.name.function.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new e(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'variable.parameter.js variable.language.this.js' },
              4: { name: 'variable.parameter.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*[\\:\\,]|(?=\\n?$))',
              'dgv',
            ),
          },
          { include: '#type-annotation' },
          { include: '#variable-initializer' },
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.js' },
          { include: '#identifiers' },
          { include: '#expressionPunctuations' },
        ],
      },
      'expression-operators': {
        patterns: [
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(await)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.flow.js',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\p{space}*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*\\*)',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'keyword.control.flow.js' } },
            end: new RegExp('\\*', 'dgv'),
            endCaptures: { 0: { name: 'keyword.generator.asterisk.js' } },
            patterns: [{ include: '#comment' }],
          },
          {
            captures: {
              1: { name: 'keyword.control.flow.js' },
              2: { name: 'keyword.generator.asterisk.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\p{space}*(\\*))?',
              'dgv',
            ),
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))delete(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.delete.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.in.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.of.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.instanceof.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.new.js',
          },
          { include: '#typeof-operator' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.void.js',
          },
          {
            captures: { 1: { name: 'keyword.control.as.js' }, 2: { name: 'storage.modifier.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\p{space}+(const)(?=\\p{space}*((?=\\n?$)|[\\;\\,\\:\\}\\)\\]]))',
              'dgv',
            ),
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\p{space}+',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.as.js' },
              2: { name: 'keyword.control.satisfies.js' },
            },
            end: new RegExp(
              '(?=^|[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\p{space}+)|(\\p{space}+<))',
              'dgv',
            ),
            patterns: [{ include: '#type' }],
          },
          { match: new RegExp('\\.\\.\\.', 'dgv'), name: 'keyword.operator.spread.js' },
          {
            match: new RegExp('\\*=|(?<!\\()\\/=|%=|\\+=|-=', 'dgv'),
            name: 'keyword.operator.assignment.compound.js',
          },
          {
            match: new RegExp('&=|\\^=|<<=|>>=|>>>=|\\|=', 'dgv'),
            name: 'keyword.operator.assignment.compound.bitwise.js',
          },
          { match: new RegExp('<<|>>>|>>', 'dgv'), name: 'keyword.operator.bitwise.shift.js' },
          { match: new RegExp('===|!==|==|!=', 'dgv'), name: 'keyword.operator.comparison.js' },
          { match: new RegExp('<=|>=|<>|<|>', 'dgv'), name: 'keyword.operator.relational.js' },
          {
            captures: {
              1: { name: 'keyword.operator.logical.js' },
              2: { name: 'keyword.operator.assignment.compound.js' },
              3: { name: 'keyword.operator.arithmetic.js' },
            },
            match: new RegExp(
              '(?<=[_\\$\\p{Alpha}\\p{Nd}])(!)\\p{space}*(?:(\\/=)|(\\/)(?![\\/\\*]))',
              'dgv',
            ),
          },
          { match: new RegExp('!|&&|\\|\\||\\?\\?', 'dgv'), name: 'keyword.operator.logical.js' },
          { match: new RegExp('&|~|\\^|\\|', 'dgv'), name: 'keyword.operator.bitwise.js' },
          { match: new RegExp('=', 'dgv'), name: 'keyword.operator.assignment.js' },
          { match: new RegExp('--', 'dgv'), name: 'keyword.operator.decrement.js' },
          { match: new RegExp('\\+\\+', 'dgv'), name: 'keyword.operator.increment.js' },
          { match: new RegExp('%|\\*|\\/|-|\\+', 'dgv'), name: 'keyword.operator.arithmetic.js' },
          {
            begin: new RegExp(
              '(?<=[_\\$\\p{Alpha}\\p{Nd}\\)\\]])\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)+(?:(\\/=)|(\\/)(?![\\/\\*])))',
              'dgv',
            ),
            end: new RegExp('(?:(\\/=)|(\\/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/))', 'dgv'),
            endCaptures: {
              1: { name: 'keyword.operator.assignment.compound.js' },
              2: { name: 'keyword.operator.arithmetic.js' },
            },
            patterns: [{ include: '#comment' }],
          },
          {
            captures: {
              1: { name: 'keyword.operator.assignment.compound.js' },
              2: { name: 'keyword.operator.arithmetic.js' },
            },
            match: new RegExp(
              '(?<=[_\\$\\p{Alpha}\\p{Nd}\\)\\]])\\p{space}*(?:(\\/=)|(\\/)(?![\\/\\*]))',
              'dgv',
            ),
          },
        ],
      },
      expressionPunctuations: {
        patterns: [{ include: '#punctuation-comma' }, { include: '#punctuation-accessor' }],
      },
      expressionWithoutIdentifiers: {
        patterns: [
          { include: '#jsx' },
          { include: '#string' },
          { include: '#regex' },
          { include: '#comment' },
          { include: '#function-expression' },
          { include: '#class-expression' },
          { include: '#arrow-function' },
          { include: '#paren-expression-possibly-arrow' },
          { include: '#cast' },
          { include: '#ternary-expression' },
          { include: '#new-expr' },
          { include: '#instanceof-expr' },
          { include: '#object-literal' },
          { include: '#expression-operators' },
          { include: '#function-call' },
          { include: '#literal' },
          { include: '#support-objects' },
          { include: '#paren-expression' },
        ],
      },
      'field-declaration': {
        begin: new RegExp(
          '(?<!\\()(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\p{space}+)?(?=\\p{space}*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(?:(?:(\\?)|(!))\\p{space}*)?(=|:|;|,|\\}|(?=\\n?$)))',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'storage.modifier.js' } },
        end: new RegExp(
          '(?=\\}|;|,|(?=\\n?$)|(^(?!\\p{space}*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(?:(?:(\\?)|(!))\\p{space}*)?(=|:|;|,|(?=\\n?$)))))|(?<=\\})',
          'dgv',
        ),
        name: 'meta.field.declaration.js',
        patterns: [
          { include: '#variable-initializer' },
          { include: '#type-annotation' },
          { include: '#string' },
          { include: '#array-literal' },
          { include: '#numeric-literal' },
          { include: '#comment' },
          {
            captures: {
              1: { name: 'meta.definition.property.js entity.name.function.js' },
              2: { name: 'keyword.operator.optional.js' },
              3: { name: 'keyword.operator.definiteassignment.js' },
            },
            match: new e(
              '(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?:(\\?)|(!))?(?=\\p{space}*\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            match: new RegExp('#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'meta.definition.property.js variable.object.property.js',
          },
          { match: new RegExp('\\?', 'dgv'), name: 'keyword.operator.optional.js' },
          { match: new RegExp('!', 'dgv'), name: 'keyword.operator.definiteassignment.js' },
        ],
      },
      'for-loop': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\p{space}+|(\\p{space}*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*))await)?\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)?(\\())',
          'dgv',
        ),
        beginCaptures: { 0: { name: 'keyword.control.loop.js' } },
        end: new RegExp('(?<=\\))', 'dgv'),
        patterns: [
          { include: '#comment' },
          { match: new RegExp('await', 'dgv'), name: 'keyword.control.loop.js' },
          {
            begin: new RegExp('\\(', 'dgv'),
            beginCaptures: { 0: { name: 'meta.brace.round.js' } },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.js' } },
            patterns: [
              { include: '#var-expr' },
              { include: '#expression' },
              { include: '#punctuation-semicolon' },
            ],
          },
        ],
      },
      'function-body': {
        patterns: [
          { include: '#comment' },
          { include: '#type-parameters' },
          { include: '#function-parameters' },
          { include: '#return-type' },
          { include: '#type-function-return-type' },
          { include: '#decl-block' },
          { match: new RegExp('\\*', 'dgv'), name: 'keyword.generator.asterisk.js' },
        ],
      },
      'function-call': {
        patterns: [
          {
            begin: new RegExp(
              '(?=(((([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))|(?<=[\\)]))\\p{space}*(?:(\\?\\.\\p{space}*)|(!))?((<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)?\\())',
              'dgv',
            ),
            end: new RegExp(
              '(?<=\\))(?!(((([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))|(?<=[\\)]))\\p{space}*(?:(\\?\\.\\p{space}*)|(!))?((<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)?\\())',
              'dgv',
            ),
            patterns: [
              {
                begin: new RegExp(
                  '(?=(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))',
                  'dgv',
                ),
                end: new RegExp(
                  '(?=\\p{space}*(?:(\\?\\.\\p{space}*)|(!))?((<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)?\\())',
                  'dgv',
                ),
                name: 'meta.function-call.js',
                patterns: [{ include: '#function-call-target' }],
              },
              { include: '#comment' },
              { include: '#function-call-optionals' },
              { include: '#type-arguments' },
              { include: '#paren-expression' },
            ],
          },
          {
            begin: new RegExp(
              '(?=(((([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))|(?<=[\\)]))(<\\p{space}*[\\{\\[\\(]\\p{space}*(?=\\n?$)))',
              'dgv',
            ),
            end: new RegExp(
              '(?<=>)(?!(((([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))|(?<=[\\)]))(<\\p{space}*[\\{\\[\\(]\\p{space}*(?=\\n?$)))',
              'dgv',
            ),
            patterns: [
              {
                begin: new RegExp(
                  '(?=(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(\\p{space}*\\??\\.\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))*)|(\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))',
                  'dgv',
                ),
                end: new RegExp('(?=(<\\p{space}*[\\{\\[\\(]\\p{space}*(?=\\n?$)))', 'dgv'),
                name: 'meta.function-call.js',
                patterns: [{ include: '#function-call-target' }],
              },
              { include: '#comment' },
              { include: '#function-call-optionals' },
              { include: '#type-arguments' },
            ],
          },
        ],
      },
      'function-call-optionals': {
        patterns: [
          {
            match: new RegExp('\\?\\.', 'dgv'),
            name: 'meta.function-call.js punctuation.accessor.optional.js',
          },
          {
            match: new RegExp('!', 'dgv'),
            name: 'meta.function-call.js keyword.operator.definiteassignment.js',
          },
        ],
      },
      'function-call-target': {
        patterns: [
          { include: '#support-function-call-identifiers' },
          {
            match: new RegExp('(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'entity.name.function.js',
          },
        ],
      },
      'function-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?(?:(async)\\p{space}+)?(function\\b)(?:\\p{space}*(\\*))?(?:(?:\\p{space}+|(?<=\\*))([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))?\\p{space}*',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.modifier.async.js' },
          4: { name: 'storage.type.function.js' },
          5: { name: 'keyword.generator.asterisk.js' },
          6: { name: 'meta.definition.function.js entity.name.function.js' },
        },
        end: new RegExp(
          '(?=;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|(?<=\\})',
          'dgv',
        ),
        name: 'meta.function.js',
        patterns: [{ include: '#function-name' }, { include: '#function-body' }],
      },
      'function-expression': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\p{space}+)?(function\\b)(?:\\p{space}*(\\*))?(?:(?:\\p{space}+|(?<=\\*))([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))?\\p{space}*',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'storage.modifier.async.js' },
          2: { name: 'storage.type.function.js' },
          3: { name: 'keyword.generator.asterisk.js' },
          4: { name: 'meta.definition.function.js entity.name.function.js' },
        },
        end: new RegExp('(?=;)|(?<=\\})', 'dgv'),
        name: 'meta.function.expression.js',
        patterns: [
          { include: '#function-name' },
          { include: '#single-line-comment-consuming-line-ending' },
          { include: '#function-body' },
        ],
      },
      'function-name': {
        match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
        name: 'meta.definition.function.js entity.name.function.js',
      },
      'function-parameters': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.parameters.begin.js' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.parameters.end.js' } },
        name: 'meta.parameters.js',
        patterns: [{ include: '#function-parameters-body' }],
      },
      'function-parameters-body': {
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          { include: '#decorator' },
          { include: '#destructuring-parameter' },
          { include: '#parameter-name' },
          { include: '#parameter-type-annotation' },
          { include: '#variable-initializer' },
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.js' },
        ],
      },
      identifiers: {
        patterns: [
          { include: '#object-identifiers' },
          {
            captures: {
              1: { name: 'punctuation.accessor.js' },
              2: { name: 'punctuation.accessor.optional.js' },
              3: { name: 'entity.name.function.js' },
            },
            match: new RegExp(
              '(?:(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.js' },
              2: { name: 'punctuation.accessor.optional.js' },
              3: { name: 'variable.other.constant.property.js' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(#?[\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)(?![_\\$\\p{Alpha}\\p{Nd}])',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.js' },
              2: { name: 'punctuation.accessor.optional.js' },
              3: { name: 'variable.other.property.js' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
              'dgv',
            ),
          },
          {
            match: new RegExp(
              '([\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)(?![_\\$\\p{Alpha}\\p{Nd}])',
              'dgv',
            ),
            name: 'variable.other.constant.js',
          },
          {
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'variable.other.readwrite.js',
          },
        ],
      },
      'if-statement': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bif\\p{space}*(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))\\p{space}*(?!\\{))',
              'dgv',
            ),
            end: new RegExp('(?=;|(?=\\n?$)|\\})', 'dgv'),
            patterns: [
              { include: '#comment' },
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(if)\\p{space}*(\\()',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.conditional.js' },
                  2: { name: 'meta.brace.round.js' },
                },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.js' } },
                patterns: [{ include: '#expression' }],
              },
              {
                begin: new RegExp(
                  '(?<=\\))\\p{space}*\\/(?![\\/\\*])(?=(?:[^\\/\\\\\\[]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
                  'dgv',
                ),
                beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
                end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
                endCaptures: {
                  1: { name: 'punctuation.definition.string.end.js' },
                  2: { name: 'keyword.other.js' },
                },
                name: 'string.regexp.js',
                patterns: [{ include: '#regexp' }],
              },
              { include: '#statements' },
            ],
          },
        ],
      },
      'import-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(import)(?:\\p{space}+(type)(?!\\p{space}+from))?(?!\\p{space}*[\\:\\(])(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'keyword.control.import.js' },
          4: { name: 'keyword.control.type.js' },
        },
        end: new RegExp('(?<!^import|[^\\._\\$\\p{Alpha}\\p{Nd}]import)(?=;|(?=\\n?$)|^)', 'dgv'),
        name: 'meta.import.js',
        patterns: [
          { include: '#single-line-comment-consuming-line-ending' },
          { include: '#comment' },
          { include: '#string' },
          {
            begin: new RegExp(
              `(?<=^import|[^\\._\\$\\p{Alpha}\\p{Nd}]import)(?!\\p{space}*["'])`,
              'dgv',
            ),
            end: new RegExp('\\bfrom\\b', 'dgv'),
            endCaptures: { 0: { name: 'keyword.control.from.js' } },
            patterns: [{ include: '#import-export-declaration' }],
          },
          { include: '#import-export-declaration' },
        ],
      },
      'import-equals-declaration': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(import)(?:\\p{space}+(type))?\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(=)\\p{space}*(require)\\p{space}*(\\()',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'keyword.control.import.js' },
              4: { name: 'keyword.control.type.js' },
              5: { name: 'variable.other.readwrite.alias.js' },
              6: { name: 'keyword.operator.assignment.js' },
              7: { name: 'keyword.control.require.js' },
              8: { name: 'meta.brace.round.js' },
            },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.js' } },
            name: 'meta.import-equals.external.js',
            patterns: [{ include: '#comment' }, { include: '#string' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(import)(?:\\p{space}+(type))?\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(=)\\p{space}*(?!require\\b)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'keyword.control.import.js' },
              4: { name: 'keyword.control.type.js' },
              5: { name: 'variable.other.readwrite.alias.js' },
              6: { name: 'keyword.operator.assignment.js' },
            },
            end: new RegExp('(?=;|(?=\\n?$)|^)', 'dgv'),
            name: 'meta.import-equals.internal.js',
            patterns: [
              { include: '#single-line-comment-consuming-line-ending' },
              { include: '#comment' },
              {
                captures: {
                  1: { name: 'entity.name.type.module.js' },
                  2: { name: 'punctuation.accessor.js' },
                  3: { name: 'punctuation.accessor.optional.js' },
                },
                match: new RegExp(
                  '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))',
                  'dgv',
                ),
              },
              {
                match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
                name: 'variable.other.readwrite.js',
              },
            ],
          },
        ],
      },
      'import-export-assert-clause': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(with)|(assert))\\p{space}*(\\{)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.with.js' },
          2: { name: 'keyword.control.assert.js' },
          3: { name: 'punctuation.definition.block.js' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          {
            match: new RegExp(
              '[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object-literal.key.js',
          },
          { match: new RegExp(':', 'dgv'), name: 'punctuation.separator.key-value.js' },
        ],
      },
      'import-export-block': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'meta.block.js',
        patterns: [{ include: '#import-export-clause' }],
      },
      'import-export-clause': {
        patterns: [
          { include: '#comment' },
          {
            captures: {
              1: { name: 'keyword.control.type.js' },
              2: { name: 'keyword.control.default.js' },
              3: { name: 'constant.language.import-export-all.js' },
              4: { name: 'variable.other.readwrite.js' },
              5: { name: 'string.quoted.alias.js' },
              12: { name: 'keyword.control.as.js' },
              13: { name: 'keyword.control.default.js' },
              14: { name: 'variable.other.readwrite.alias.js' },
              15: { name: 'string.quoted.alias.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\btype)\\p{space}+)?(?:(\\bdefault)|(\\*)|(\\b[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))\\p{space}+(as)\\p{space}+(?:(default(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))',
              'dgv',
            ),
          },
          { include: '#punctuation-comma' },
          { match: new RegExp('\\*', 'dgv'), name: 'constant.language.import-export-all.js' },
          { match: new RegExp('\\b(default)\\b', 'dgv'), name: 'keyword.control.default.js' },
          {
            captures: {
              1: { name: 'keyword.control.type.js' },
              2: { name: 'variable.other.readwrite.alias.js' },
              3: { name: 'string.quoted.alias.js' },
            },
            match: new RegExp(
              '(?:(\\btype)\\p{space}+)?(?:([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))',
              'dgv',
            ),
          },
        ],
      },
      'import-export-declaration': {
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          { include: '#import-export-block' },
          { match: new RegExp('\\bfrom\\b', 'dgv'), name: 'keyword.control.from.js' },
          { include: '#import-export-assert-clause' },
          { include: '#import-export-clause' },
        ],
      },
      'indexer-declaration': {
        begin: new RegExp(
          '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)\\p{space}*)?\\p{space}*(\\[)\\p{space}*([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?=:)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'storage.modifier.js' },
          2: { name: 'meta.brace.square.js' },
          3: { name: 'variable.parameter.js' },
        },
        end: new RegExp('(\\])\\p{space}*(\\?\\p{space}*)?|(?=\\n?$)', 'dgv'),
        endCaptures: {
          1: { name: 'meta.brace.square.js' },
          2: { name: 'keyword.operator.optional.js' },
        },
        name: 'meta.indexer.declaration.js',
        patterns: [{ include: '#type-annotation' }],
      },
      'indexer-mapped-type-declaration': {
        begin: new RegExp(
          '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))([\\+\\-])?(readonly)\\p{space}*)?\\p{space}*(\\[)\\p{space}*([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}+(in)\\p{space}+',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.operator.type.modifier.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'meta.brace.square.js' },
          4: { name: 'entity.name.type.js' },
          5: { name: 'keyword.operator.expression.in.js' },
        },
        end: new RegExp('(\\])([\\+\\-])?\\p{space}*(\\?\\p{space}*)?|(?=\\n?$)', 'dgv'),
        endCaptures: {
          1: { name: 'meta.brace.square.js' },
          2: { name: 'keyword.operator.type.modifier.js' },
          3: { name: 'keyword.operator.optional.js' },
        },
        name: 'meta.indexer.mappedtype.declaration.js',
        patterns: [
          {
            captures: { 1: { name: 'keyword.control.as.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\p{space}+',
              'dgv',
            ),
          },
          { include: '#type' },
        ],
      },
      'inline-tags': {
        patterns: [
          {
            captures: {
              1: { name: 'punctuation.definition.bracket.square.begin.jsdoc' },
              2: { name: 'punctuation.definition.bracket.square.end.jsdoc' },
            },
            match: new RegExp(
              '(\\[)[^\\]]+(\\])(?=\\{@(?:link|linkcode|linkplain|tutorial))',
              'dgv',
            ),
            name: 'constant.other.description.jsdoc',
          },
          {
            begin: new RegExp('(\\{)((@)(?:link(?:code|plain)?|tutorial))\\p{space}*', 'dgv'),
            beginCaptures: {
              1: { name: 'punctuation.definition.bracket.curly.begin.jsdoc' },
              2: { name: 'storage.type.class.jsdoc' },
              3: { name: 'punctuation.definition.inline.tag.jsdoc' },
            },
            end: new RegExp('\\}|(?=\\*\\/)', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.bracket.curly.end.jsdoc' } },
            name: 'entity.name.type.instance.jsdoc',
            patterns: [
              {
                captures: {
                  1: { name: 'variable.other.link.underline.jsdoc' },
                  2: { name: 'punctuation.separator.pipe.jsdoc' },
                },
                match: new RegExp(
                  '((?=https?:\\/\\/)(?:[^\\|\\}\\p{space}\\*]|\\*[\\/])+)(\\|)?',
                  'dgvy',
                ),
              },
              {
                captures: {
                  1: { name: 'variable.other.description.jsdoc' },
                  2: { name: 'punctuation.separator.pipe.jsdoc' },
                },
                match: new RegExp('((?:[^\\{\\}\\@\\p{space}\\|\\*]|\\*[^\\/])+)(\\|)?', 'dgvy'),
              },
            ],
          },
        ],
      },
      'instanceof-expr': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(instanceof)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'keyword.operator.expression.instanceof.js' } },
        end: new RegExp(
          '(?<=\\))|(?=[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|(===|!==|==|!=)|(([\\&\\~\\^\\|]\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+instanceof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\p{space}+[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\\p{space}*[\\(]))))',
          'dgv',
        ),
        patterns: [{ include: '#type' }],
      },
      'interface-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(?:(abstract)\\p{space}+)?\\b(interface)\\b(?=\\p{space}+|\\/[\\/\\*])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.modifier.js' },
          4: { name: 'storage.type.interface.js' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.interface.js',
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          {
            captures: { 0: { name: 'entity.name.type.interface.js' } },
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
          },
          { include: '#type-parameters' },
          { include: '#class-or-interface-body' },
        ],
      },
      jsdoctype: {
        patterns: [
          {
            begin: new RegExp('(\\{)', 'dgvy'),
            beginCaptures: {
              0: { name: 'entity.name.type.instance.jsdoc' },
              1: { name: 'punctuation.definition.bracket.curly.begin.jsdoc' },
            },
            contentName: 'entity.name.type.instance.jsdoc',
            end: new RegExp('((\\}))\\p{space}*|(?=\\*\\/)', 'dgv'),
            endCaptures: {
              1: { name: 'entity.name.type.instance.jsdoc' },
              2: { name: 'punctuation.definition.bracket.curly.end.jsdoc' },
            },
            patterns: [{ include: '#brackets' }],
          },
        ],
      },
      jsx: {
        patterns: [
          { include: '#jsx-tag-without-attributes-in-expression' },
          { include: '#jsx-tag-in-expression' },
        ],
      },
      'jsx-children': {
        patterns: [
          { include: '#jsx-tag-without-attributes' },
          { include: '#jsx-tag' },
          { include: '#jsx-evaluated-code' },
          { include: '#jsx-entities' },
        ],
      },
      'jsx-entities': {
        patterns: [
          {
            captures: {
              1: { name: 'punctuation.definition.entity.js' },
              3: { name: 'punctuation.definition.entity.js' },
            },
            match: new RegExp('(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)', 'dgv'),
            name: 'constant.character.entity.js',
          },
        ],
      },
      'jsx-evaluated-code': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.section.embedded.begin.js' } },
        contentName: 'meta.embedded.expression.js',
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.section.embedded.end.js' } },
        patterns: [{ include: '#expression' }],
      },
      'jsx-string-double-quoted': {
        begin: new RegExp('"', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
        end: new RegExp('"', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.string.end.js' } },
        name: 'string.quoted.double.js',
        patterns: [{ include: '#jsx-entities' }],
      },
      'jsx-string-single-quoted': {
        begin: new RegExp("'", 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
        end: new RegExp("'", 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.string.end.js' } },
        name: 'string.quoted.single.js',
        patterns: [{ include: '#jsx-entities' }],
      },
      'jsx-tag': {
        begin: new RegExp(
          '(?=(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))(?=((<\\p{space}*)|(\\p{space}+))(?!\\?)|\\/?>))',
          'dgv',
        ),
        end: new RegExp(
          '(\\/>)|(<\\/)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))?\\p{space}*(>)',
          'dgv',
        ),
        endCaptures: {
          1: { name: 'punctuation.definition.tag.end.js' },
          2: { name: 'punctuation.definition.tag.begin.js' },
          3: { name: 'entity.name.tag.namespace.js' },
          4: { name: 'punctuation.separator.namespace.js' },
          5: { name: 'entity.name.tag.js' },
          6: { name: 'support.class.component.js' },
          7: { name: 'punctuation.definition.tag.end.js' },
        },
        name: 'meta.tag.js',
        patterns: [
          {
            begin: new RegExp(
              '(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))(?=((<\\p{space}*)|(\\p{space}+))(?!\\?)|\\/?>)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'punctuation.definition.tag.begin.js' },
              2: { name: 'entity.name.tag.namespace.js' },
              3: { name: 'punctuation.separator.namespace.js' },
              4: { name: 'entity.name.tag.js' },
              5: { name: 'support.class.component.js' },
            },
            end: new RegExp('(?=[\\/]?>)', 'dgv'),
            patterns: [
              { include: '#comment' },
              { include: '#type-arguments' },
              { include: '#jsx-tag-attributes' },
            ],
          },
          {
            begin: new RegExp('(>)', 'dgv'),
            beginCaptures: { 1: { name: 'punctuation.definition.tag.end.js' } },
            contentName: 'meta.jsx.children.js',
            end: new RegExp('(?=<\\/)', 'dgv'),
            patterns: [{ include: '#jsx-children' }],
          },
        ],
      },
      'jsx-tag-attribute-assignment': {
        match: new RegExp(`=(?=\\p{space}*(?:'|"|\\{|\\/\\*|\\/\\/|\\n))`, 'dgv'),
        name: 'keyword.operator.assignment.js',
      },
      'jsx-tag-attribute-name': {
        captures: {
          1: { name: 'entity.other.attribute-name.namespace.js' },
          2: { name: 'punctuation.separator.namespace.js' },
          3: { name: 'entity.other.attribute-name.js' },
        },
        match: new RegExp(
          '\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(:))?([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}|=|\\/?>|\\/\\*|\\/\\/)',
          'dgv',
        ),
      },
      'jsx-tag-attributes': {
        begin: new RegExp('\\p{space}+', 'dgv'),
        end: new RegExp('(?=[\\/]?>)', 'dgv'),
        name: 'meta.tag.attributes.js',
        patterns: [
          { include: '#comment' },
          { include: '#jsx-tag-attribute-name' },
          { include: '#jsx-tag-attribute-assignment' },
          { include: '#jsx-string-double-quoted' },
          { include: '#jsx-string-single-quoted' },
          { include: '#jsx-evaluated-code' },
          { include: '#jsx-tag-attributes-illegal' },
        ],
      },
      'jsx-tag-attributes-illegal': {
        match: new RegExp('\\P{space}+', 'dgv'),
        name: 'invalid.illegal.attribute.js',
      },
      'jsx-tag-in-expression': {
        begin: new RegExp(
          '(?<!\\+\\+|--)(?<=[\\(\\{\\[\\,\\?\\=\\>\\:\\*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._\\$\\p{Alpha}\\p{Nd}]await|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^default|[^\\._\\$\\p{Alpha}\\p{Nd}]default|^yield|[^\\._\\$\\p{Alpha}\\p{Nd}]yield|^)\\p{space}*(?!<\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*((\\p{space}+extends\\p{space}+[^\\=\\>])|,))(?=(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))(?=((<\\p{space}*)|(\\p{space}+))(?!\\?)|\\/?>))',
          'dgv',
        ),
        end: new RegExp(
          '(?!(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))(?=((<\\p{space}*)|(\\p{space}+))(?!\\?)|\\/?>))',
          'dgv',
        ),
        patterns: [{ include: '#jsx-tag' }],
      },
      'jsx-tag-without-attributes': {
        begin: new RegExp(
          '(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))?\\p{space}*(>)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'punctuation.definition.tag.begin.js' },
          2: { name: 'entity.name.tag.namespace.js' },
          3: { name: 'punctuation.separator.namespace.js' },
          4: { name: 'entity.name.tag.js' },
          5: { name: 'support.class.component.js' },
          6: { name: 'punctuation.definition.tag.end.js' },
        },
        contentName: 'meta.jsx.children.js',
        end: new RegExp(
          '(<\\/)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))?\\p{space}*(>)',
          'dgv',
        ),
        endCaptures: {
          1: { name: 'punctuation.definition.tag.begin.js' },
          2: { name: 'entity.name.tag.namespace.js' },
          3: { name: 'punctuation.separator.namespace.js' },
          4: { name: 'entity.name.tag.js' },
          5: { name: 'support.class.component.js' },
          6: { name: 'punctuation.definition.tag.end.js' },
        },
        name: 'meta.tag.without-attributes.js',
        patterns: [{ include: '#jsx-children' }],
      },
      'jsx-tag-without-attributes-in-expression': {
        begin: new RegExp(
          '(?<!\\+\\+|--)(?<=[\\(\\{\\[\\,\\?\\=\\>\\:\\*]|&&|\\|\\||\\?|\\*\\/|^await|[^\\._\\$\\p{Alpha}\\p{Nd}]await|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^default|[^\\._\\$\\p{Alpha}\\p{Nd}]default|^yield|[^\\._\\$\\p{Alpha}\\p{Nd}]yield|^)\\p{space}*(?=(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))?\\p{space}*(>))',
          'dgv',
        ),
        end: new RegExp(
          '(?!(<)\\p{space}*(?:([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*)(?<!\\.|-)(:))?((?:[a-z][a-z0-9]*|([_\\$\\p{Alpha}][\\-_\\$\\p{Alpha}\\p{Nd}\\.]*))(?<!\\.|-))?\\p{space}*(>))',
          'dgv',
        ),
        patterns: [{ include: '#jsx-tag-without-attributes' }],
      },
      label: {
        patterns: [
          {
            begin: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(:)(?=\\p{space}*\\{)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'entity.name.label.js' },
              2: { name: 'punctuation.separator.label.js' },
            },
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#decl-block' }],
          },
          {
            captures: {
              1: { name: 'entity.name.label.js' },
              2: { name: 'punctuation.separator.label.js' },
            },
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(:)', 'dgv'),
          },
        ],
      },
      literal: {
        patterns: [
          { include: '#numeric-literal' },
          { include: '#boolean-literal' },
          { include: '#null-literal' },
          { include: '#undefined-literal' },
          { include: '#numericConstant-literal' },
          { include: '#array-literal' },
          { include: '#this-literal' },
          { include: '#super-literal' },
        ],
      },
      'method-declaration': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\p{space}+)?(?:\\b(public|private|protected)\\p{space}+)?(?:\\b(abstract)\\p{space}+)?(?:\\b(async)\\p{space}+)?\\p{space}*\\b(constructor)\\b(?!:)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'storage.modifier.js' },
              4: { name: 'storage.modifier.async.js' },
              5: { name: 'storage.type.js' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.js',
            patterns: [{ include: '#method-declaration-name' }, { include: '#function-body' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\p{space}+)?(?:\\b(public|private|protected)\\p{space}+)?(?:\\b(abstract)\\p{space}+)?(?:\\b(async)\\p{space}+)?(?:\\p{space}*\\b(new)\\b(?!:)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))|(?:(\\*)\\p{space}*)?)(?=\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'storage.modifier.js' },
              4: { name: 'storage.modifier.async.js' },
              5: { name: 'keyword.operator.new.js' },
              6: { name: 'keyword.generator.asterisk.js' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.js',
            patterns: [{ include: '#method-declaration-name' }, { include: '#function-body' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\p{space}+)?(?:\\b(public|private|protected)\\p{space}+)?(?:\\b(abstract)\\p{space}+)?(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'storage.modifier.js' },
              4: { name: 'storage.modifier.async.js' },
              5: { name: 'storage.type.property.js' },
              6: { name: 'keyword.generator.asterisk.js' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.js',
            patterns: [{ include: '#method-declaration-name' }, { include: '#function-body' }],
          },
        ],
      },
      'method-declaration-name': {
        begin: new RegExp(
          '(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??)\\p{space}*[\\(\\<])',
          'dgv',
        ),
        end: new RegExp('(?=\\(|<)', 'dgv'),
        patterns: [
          { include: '#string' },
          { include: '#array-literal' },
          { include: '#numeric-literal' },
          {
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'meta.definition.method.js entity.name.function.js',
          },
          { match: new RegExp('\\?', 'dgv'), name: 'keyword.operator.optional.js' },
        ],
      },
      'namespace-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(namespace|module)\\p{space}+(?=[_\\$\\p{Alpha}"\'\\`])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.type.namespace.js' },
        },
        end: new RegExp(
          '(?<=\\})|(?=;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
          'dgv',
        ),
        name: 'meta.namespace.declaration.js',
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          {
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'entity.name.type.module.js',
          },
          { include: '#punctuation-accessor' },
          { include: '#decl-block' },
        ],
      },
      'new-expr': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'keyword.operator.new.js' } },
        end: new RegExp(
          '(?<=\\))|(?=[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\p{space}+[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\\p{space}*[\\(]))))',
          'dgv',
        ),
        name: 'new.expr.js',
        patterns: [{ include: '#expression' }],
      },
      'null-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'constant.language.null.js',
      },
      'numeric-literal': {
        patterns: [
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.js' } },
            match: new RegExp('\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.hex.js',
          },
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.js' } },
            match: new RegExp('\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.binary.js',
          },
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.js' } },
            match: new RegExp('\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.octal.js',
          },
          {
            captures: {
              0: { name: 'constant.numeric.decimal.js' },
              1: { name: 'meta.delimiter.decimal.period.js' },
              2: { name: 'storage.type.numeric.bigint.js' },
              3: { name: 'meta.delimiter.decimal.period.js' },
              4: { name: 'storage.type.numeric.bigint.js' },
              5: { name: 'meta.delimiter.decimal.period.js' },
              6: { name: 'storage.type.numeric.bigint.js' },
              7: { name: 'storage.type.numeric.bigint.js' },
              8: { name: 'meta.delimiter.decimal.period.js' },
              9: { name: 'storage.type.numeric.bigint.js' },
              10: { name: 'meta.delimiter.decimal.period.js' },
              11: { name: 'storage.type.numeric.bigint.js' },
              12: { name: 'meta.delimiter.decimal.period.js' },
              13: { name: 'storage.type.numeric.bigint.js' },
              14: { name: 'storage.type.numeric.bigint.js' },
            },
            match: new RegExp(
              '(?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$)',
              'dgv',
            ),
          },
        ],
      },
      'numericConstant-literal': {
        patterns: [
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))NaN(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.nan.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.infinity.js',
          },
        ],
      },
      'object-binding-element': {
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp(
              '(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(:))',
              'dgv',
            ),
            end: new RegExp('(?=,|\\})', 'dgv'),
            patterns: [
              { include: '#object-binding-element-propertyName' },
              { include: '#binding-element' },
            ],
          },
          { include: '#object-binding-pattern' },
          { include: '#destructuring-variable-rest' },
          { include: '#variable-initializer' },
          { include: '#punctuation-comma' },
        ],
      },
      'object-binding-element-const': {
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp(
              '(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(:))',
              'dgv',
            ),
            end: new RegExp('(?=,|\\})', 'dgv'),
            patterns: [
              { include: '#object-binding-element-propertyName' },
              { include: '#binding-element-const' },
            ],
          },
          { include: '#object-binding-pattern-const' },
          { include: '#destructuring-variable-rest-const' },
          { include: '#variable-initializer' },
          { include: '#punctuation-comma' },
        ],
      },
      'object-binding-element-propertyName': {
        begin: new RegExp(
          '(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(:))',
          'dgv',
        ),
        end: new RegExp('(:)', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.destructuring.js' } },
        patterns: [
          { include: '#string' },
          { include: '#array-literal' },
          { include: '#numeric-literal' },
          {
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'variable.object.property.js',
          },
        ],
      },
      'object-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.object.js' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.js' } },
        patterns: [{ include: '#object-binding-element' }],
      },
      'object-binding-pattern-const': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.object.js' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.js' } },
        patterns: [{ include: '#object-binding-element-const' }],
      },
      'object-identifiers': {
        patterns: [
          {
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*\\??\\.\\p{space}*prototype\\b(?!\\$))',
              'dgv',
            ),
            name: 'support.class.js',
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.js' },
              2: { name: 'punctuation.accessor.optional.js' },
              3: { name: 'variable.other.constant.object.property.js' },
              4: { name: 'variable.other.object.property.js' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(?:(#?[\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)|(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?=\\p{space}*\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'variable.other.constant.object.js' },
              2: { name: 'variable.other.object.js' },
            },
            match: new RegExp(
              '(?:([\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?=\\p{space}*\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
              'dgv',
            ),
          },
        ],
      },
      'object-literal': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'meta.objectliteral.js',
        patterns: [{ include: '#object-member' }],
      },
      'object-literal-method-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'storage.modifier.async.js' },
          2: { name: 'storage.type.property.js' },
          3: { name: 'keyword.generator.asterisk.js' },
        },
        end: new RegExp('(?=\\}|;|,)|(?<=\\})', 'dgv'),
        name: 'meta.method.declaration.js',
        patterns: [
          { include: '#method-declaration-name' },
          { include: '#function-body' },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.async.js' },
              2: { name: 'storage.type.property.js' },
              3: { name: 'keyword.generator.asterisk.js' },
            },
            end: new RegExp('(?=\\(|<)', 'dgv'),
            patterns: [{ include: '#method-declaration-name' }],
          },
        ],
      },
      'object-member': {
        patterns: [
          { include: '#comment' },
          { include: '#object-literal-method-declaration' },
          {
            begin: new RegExp('(?=\\[)', 'dgv'),
            end: new RegExp('(?=:)|((?<=[\\]])(?=\\p{space}*[\\(\\<]))', 'dgv'),
            name: 'meta.object.member.js meta.object-literal.key.js',
            patterns: [{ include: '#comment' }, { include: '#array-literal' }],
          },
          {
            begin: new RegExp('(?=[\'"\\`])', 'dgv'),
            end: new RegExp(
              '(?=:)|((?<=[\'"\\`])(?=((\\p{space}*[\\(\\<\\,\\}])|(\\p{space}+(as|satisifies)\\p{space}+))))',
              'dgv',
            ),
            name: 'meta.object.member.js meta.object-literal.key.js',
            patterns: [{ include: '#comment' }, { include: '#string' }],
          },
          {
            begin: new RegExp(
              '(?=(\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$)))',
              'dgv',
            ),
            end: new RegExp(
              '(?=:)|(?=\\p{space}*([\\(\\<\\,\\}])|(\\p{space}+as|satisifies\\p{space}+))',
              'dgv',
            ),
            name: 'meta.object.member.js meta.object-literal.key.js',
            patterns: [{ include: '#comment' }, { include: '#numeric-literal' }],
          },
          {
            begin: new RegExp('(?<=[\\]\'"\\`])(?=\\p{space}*[\\(\\<])', 'dgv'),
            end: new RegExp('(?=\\}|;|,)|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.js',
            patterns: [{ include: '#function-body' }],
          },
          {
            captures: {
              0: { name: 'meta.object-literal.key.js' },
              1: { name: 'constant.numeric.decimal.js' },
            },
            match: new RegExp(
              '(?![_\\$\\p{Alpha}])([\\p{Nd}]+)\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object.member.js',
          },
          {
            captures: {
              0: { name: 'meta.object-literal.key.js' },
              1: { name: 'entity.name.function.js' },
            },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:(\\p{space}*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/)*\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))',
              'dgv',
            ),
            name: 'meta.object.member.js',
          },
          {
            captures: { 0: { name: 'meta.object-literal.key.js' } },
            match: new RegExp(
              '[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object.member.js',
          },
          {
            begin: new RegExp('\\.\\.\\.', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.spread.js' } },
            end: new RegExp('(?=,|\\})', 'dgv'),
            name: 'meta.object.member.js',
            patterns: [{ include: '#expression' }],
          },
          {
            captures: { 1: { name: 'variable.other.readwrite.js' } },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?=,|\\}|(?=\\n?$)|\\/\\/|\\/\\*)',
              'dgv',
            ),
            name: 'meta.object.member.js',
          },
          {
            captures: { 1: { name: 'keyword.control.as.js' }, 2: { name: 'storage.modifier.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\p{space}+(const)(?=\\p{space}*([\\,\\}]|(?=\\n?$)))',
              'dgv',
            ),
            name: 'meta.object.member.js',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\p{space}+',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.as.js' },
              2: { name: 'keyword.control.satisfies.js' },
            },
            end: new RegExp(
              '(?=[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|^|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.object.member.js',
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(?=[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=)', 'dgv'),
            end: new RegExp('(?=,|\\}|(?=\\n?$)|\\/\\/|\\/\\*)', 'dgv'),
            name: 'meta.object.member.js',
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp(':', 'dgv'),
            beginCaptures: {
              0: { name: 'meta.object-literal.key.js punctuation.separator.key-value.js' },
            },
            end: new RegExp('(?=,|\\})', 'dgv'),
            name: 'meta.object.member.js',
            patterns: [
              {
                begin: new RegExp(
                  '(?<=:)\\p{space}*(async)?(?=\\p{space}*(<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)\\(\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'storage.modifier.async.js' } },
                end: new RegExp('(?<=\\))', 'dgv'),
                patterns: [
                  { include: '#type-parameters' },
                  {
                    begin: new RegExp('\\(', 'dgv'),
                    beginCaptures: { 0: { name: 'meta.brace.round.js' } },
                    end: new RegExp('\\)', 'dgv'),
                    endCaptures: { 0: { name: 'meta.brace.round.js' } },
                    patterns: [{ include: '#expression-inside-possibly-arrow-parens' }],
                  },
                ],
              },
              {
                begin: new RegExp(
                  '(?<=:)\\p{space}*(async)?\\p{space}*(\\()(?=\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'storage.modifier.async.js' },
                  2: { name: 'meta.brace.round.js' },
                },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.js' } },
                patterns: [{ include: '#expression-inside-possibly-arrow-parens' }],
              },
              {
                begin: new RegExp(
                  '(?<=:)\\p{space}*(async)?\\p{space}*(?=<\\p{space}*(?=\\n?$))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'storage.modifier.async.js' } },
                end: new RegExp('(?<=>)', 'dgv'),
                patterns: [{ include: '#type-parameters' }],
              },
              {
                begin: new RegExp(
                  '(?<=>)\\p{space}*(\\()(?=\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'meta.brace.round.js' } },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.js' } },
                patterns: [{ include: '#expression-inside-possibly-arrow-parens' }],
              },
              { include: '#possibly-arrow-return-type' },
              { include: '#expression' },
            ],
          },
          { include: '#punctuation-comma' },
          { include: '#decl-block' },
        ],
      },
      'parameter-array-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.array.js' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.js' } },
        patterns: [{ include: '#parameter-binding-element' }, { include: '#punctuation-comma' }],
      },
      'parameter-binding-element': {
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          { include: '#numeric-literal' },
          { include: '#regex' },
          { include: '#parameter-object-binding-pattern' },
          { include: '#parameter-array-binding-pattern' },
          { include: '#destructuring-parameter-rest' },
          { include: '#variable-initializer' },
        ],
      },
      'parameter-name': {
        patterns: [
          {
            captures: { 1: { name: 'storage.modifier.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\p{space}+(?=(override|public|protected|private|readonly)\\p{space}+)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'entity.name.function.js variable.language.this.js' },
              4: { name: 'entity.name.function.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new e(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'variable.parameter.js variable.language.this.js' },
              4: { name: 'variable.parameter.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)',
              'dgv',
            ),
          },
        ],
      },
      'parameter-object-binding-element': {
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp(
              '(?=((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(:))',
              'dgv',
            ),
            end: new RegExp('(?=,|\\})', 'dgv'),
            patterns: [
              { include: '#object-binding-element-propertyName' },
              { include: '#parameter-binding-element' },
              { include: '#paren-expression' },
            ],
          },
          { include: '#parameter-object-binding-pattern' },
          { include: '#destructuring-parameter-rest' },
          { include: '#variable-initializer' },
          { include: '#punctuation-comma' },
        ],
      },
      'parameter-object-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.js' },
          2: { name: 'punctuation.definition.binding-pattern.object.js' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.js' } },
        patterns: [{ include: '#parameter-object-binding-element' }],
      },
      'parameter-type-annotation': {
        patterns: [
          {
            begin: new RegExp('(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
            end: new RegExp('(?=[\\,\\)])|(?==[^\\>])', 'dgv'),
            name: 'meta.type.annotation.js',
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'paren-expression': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'meta.brace.round.js' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.round.js' } },
        patterns: [{ include: '#expression' }],
      },
      'paren-expression-possibly-arrow': {
        patterns: [
          {
            begin: new RegExp(
              '(?<=[\\(\\=\\,])\\p{space}*(async)?(?=\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?\\(\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.js' } },
            end: new RegExp('(?<=\\))', 'dgv'),
            patterns: [{ include: '#paren-expression-possibly-arrow-with-typeparameters' }],
          },
          {
            begin: new RegExp(
              '(?<=[\\(\\=\\,]|=>|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return)\\p{space}*(async)?(?=\\p{space}*((((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?\\()|(<)|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)))\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.js' } },
            end: new RegExp('(?<=\\))', 'dgv'),
            patterns: [{ include: '#paren-expression-possibly-arrow-with-typeparameters' }],
          },
          { include: '#possibly-arrow-return-type' },
        ],
      },
      'paren-expression-possibly-arrow-with-typeparameters': {
        patterns: [
          { include: '#type-parameters' },
          {
            begin: new RegExp('\\(', 'dgv'),
            beginCaptures: { 0: { name: 'meta.brace.round.js' } },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.js' } },
            patterns: [{ include: '#expression-inside-possibly-arrow-parens' }],
          },
        ],
      },
      'possibly-arrow-return-type': {
        begin: new RegExp(
          '(?<=\\)|^)\\p{space}*(:)(?=\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*=>)',
          'dgv',
        ),
        beginCaptures: {
          1: {
            name: 'meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js',
          },
        },
        contentName: 'meta.arrow.js meta.return.type.arrow.js',
        end: new RegExp(
          '(?==>|\\{|(^\\p{space}*(export|function|class|interface|let|var|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|const|import|enum|namespace|module|type|abstract|declare)\\p{space}+))',
          'dgv',
        ),
        patterns: [{ include: '#arrow-return-type-body' }],
      },
      'property-accessor': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(accessor|get|set)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'storage.type.property.js',
      },
      'punctuation-accessor': {
        captures: {
          1: { name: 'punctuation.accessor.js' },
          2: { name: 'punctuation.accessor.optional.js' },
        },
        match: new RegExp('(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))', 'dgv'),
      },
      'punctuation-comma': {
        match: new RegExp(',', 'dgv'),
        name: 'punctuation.separator.comma.js',
      },
      'punctuation-semicolon': {
        match: new RegExp(';', 'dgv'),
        name: 'punctuation.terminator.statement.js',
      },
      'qstring-double': {
        begin: new RegExp('"', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
        end: new RegExp('(")|([^\\\\\\n](?=\\n?$))', 'dgv'),
        endCaptures: {
          1: { name: 'punctuation.definition.string.end.js' },
          2: { name: 'invalid.illegal.newline.js' },
        },
        name: 'string.quoted.double.js',
        patterns: [{ include: '#string-character-escape' }],
      },
      'qstring-single': {
        begin: new RegExp("'", 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
        end: new RegExp("(')|([^\\\\\\n](?=\\n?$))", 'dgv'),
        endCaptures: {
          1: { name: 'punctuation.definition.string.end.js' },
          2: { name: 'invalid.illegal.newline.js' },
        },
        name: 'string.quoted.single.js',
        patterns: [{ include: '#string-character-escape' }],
      },
      regex: {
        patterns: [
          {
            begin: new RegExp(
              '(?<!\\+\\+|--|\\})(?<=[\\=\\(\\:\\,\\[\\?\\+\\!]|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^case|[^\\._\\$\\p{Alpha}\\p{Nd}]case|=>|&&|\\|\\||\\*\\/)\\p{space}*(\\/)(?![\\/\\*])(?=(?:[^\\/\\\\\\[\\(\\)]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])+\\]|\\(([^\\)\\\\]|\\\\[^\\n])+\\))+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'punctuation.definition.string.begin.js' } },
            end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
            endCaptures: {
              1: { name: 'punctuation.definition.string.end.js' },
              2: { name: 'keyword.other.js' },
            },
            name: 'string.regexp.js',
            patterns: [{ include: '#regexp' }],
          },
          {
            begin: new RegExp(
              '((?<![_\\$\\p{Alpha}\\p{Nd}\\)\\]]|\\+\\+|--|\\}|\\*\\/)|((?<=^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^case|[^\\._\\$\\p{Alpha}\\p{Nd}]case))\\p{space}*)\\/(?![\\/\\*])(?=(?:[^\\/\\\\\\[]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
              'dgv',
            ),
            beginCaptures: { 0: { name: 'punctuation.definition.string.begin.js' } },
            end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
            endCaptures: {
              1: { name: 'punctuation.definition.string.end.js' },
              2: { name: 'keyword.other.js' },
            },
            name: 'string.regexp.js',
            patterns: [{ include: '#regexp' }],
          },
        ],
      },
      'regex-character-class': {
        patterns: [
          {
            match: new RegExp('\\\\[wWsSdDtrnvf]|\\.', 'dgv'),
            name: 'constant.other.character-class.regexp',
          },
          {
            match: new RegExp('\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})', 'dgv'),
            name: 'constant.character.numeric.regexp',
          },
          { match: new RegExp('\\\\c[A-Z]', 'dgv'), name: 'constant.character.control.regexp' },
          {
            match: new RegExp('\\\\[^\\n]', 'dgv'),
            name: 'constant.character.escape.backslash.regexp',
          },
        ],
      },
      regexp: {
        patterns: [
          { match: new RegExp('\\\\[bB]|\\^|\\$', 'dgv'), name: 'keyword.control.anchor.regexp' },
          {
            captures: {
              0: { name: 'keyword.other.back-reference.regexp' },
              1: { name: 'variable.other.regexp' },
            },
            match: new RegExp(
              '\\\\[1-9]\\p{Nd}*|\\\\k<([a-zA-Z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$]*)>',
              'dgv',
            ),
          },
          {
            match: new RegExp(
              '[\\?\\+\\*]|\\{(\\p{Nd}+,\\p{Nd}+|\\p{Nd}+,|,\\p{Nd}+|\\p{Nd}+)\\}\\??',
              'dgv',
            ),
            name: 'keyword.operator.quantifier.regexp',
          },
          { match: new RegExp('\\|', 'dgv'), name: 'keyword.operator.or.regexp' },
          {
            begin: new RegExp('(\\()((\\?=)|(\\?!)|(\\?<=)|(\\?<!))', 'dgv'),
            beginCaptures: {
              1: { name: 'punctuation.definition.group.regexp' },
              2: { name: 'punctuation.definition.group.assertion.regexp' },
              3: { name: 'meta.assertion.look-ahead.regexp' },
              4: { name: 'meta.assertion.negative-look-ahead.regexp' },
              5: { name: 'meta.assertion.look-behind.regexp' },
              6: { name: 'meta.assertion.negative-look-behind.regexp' },
            },
            end: new RegExp('(\\))', 'dgv'),
            endCaptures: { 1: { name: 'punctuation.definition.group.regexp' } },
            name: 'meta.group.assertion.regexp',
            patterns: [{ include: '#regexp' }],
          },
          {
            begin: new RegExp(
              '\\((?:(\\?:)|\\?<([a-zA-Z_\\$][\\p{L}\\p{M}\\p{N}\\p{Pc}\\$]*)>)?',
              'dgv',
            ),
            beginCaptures: {
              0: { name: 'punctuation.definition.group.regexp' },
              1: { name: 'punctuation.definition.group.no-capture.regexp' },
              2: { name: 'variable.other.regexp' },
            },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.group.regexp' } },
            name: 'meta.group.regexp',
            patterns: [{ include: '#regexp' }],
          },
          {
            begin: new RegExp('(\\[)(\\^)?', 'dgv'),
            beginCaptures: {
              1: { name: 'punctuation.definition.character-class.regexp' },
              2: { name: 'keyword.operator.negation.regexp' },
            },
            end: new RegExp('(\\])', 'dgv'),
            endCaptures: { 1: { name: 'punctuation.definition.character-class.regexp' } },
            name: 'constant.other.character-class.set.regexp',
            patterns: [
              {
                captures: {
                  1: { name: 'constant.character.numeric.regexp' },
                  2: { name: 'constant.character.control.regexp' },
                  3: { name: 'constant.character.escape.backslash.regexp' },
                  4: { name: 'constant.character.numeric.regexp' },
                  5: { name: 'constant.character.control.regexp' },
                  6: { name: 'constant.character.escape.backslash.regexp' },
                },
                match: new RegExp(
                  '(?:[^\\n]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\[^\\n]))-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\[^\\n]))',
                  'dgv',
                ),
                name: 'constant.other.character-class.range.regexp',
              },
              { include: '#regex-character-class' },
            ],
          },
          { include: '#regex-character-class' },
        ],
      },
      'return-type': {
        patterns: [
          {
            begin: new RegExp('(?<=\\))\\p{space}*(:)(?=\\p{space}*\\P{space})', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
            end: new RegExp('(?<![\\:\\|\\&])(?=(?=\\n?$)|^|[\\{\\}\\;\\,]|\\/\\/)', 'dgv'),
            name: 'meta.return.type.js',
            patterns: [{ include: '#return-type-core' }],
          },
          {
            begin: new RegExp('(?<=\\))\\p{space}*(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])((?=[\\{\\}\\;\\,]|\\/\\/|^\\p{space}*(?=\\n?$))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.return.type.js',
            patterns: [{ include: '#return-type-core' }],
          },
        ],
      },
      'return-type-core': {
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp('(?<=[\\:\\|\\&])(?=\\p{space}*\\{)', 'dgv'),
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#type-object' }],
          },
          { include: '#type-predicate-operator' },
          { include: '#type' },
        ],
      },
      shebang: {
        captures: { 1: { name: 'punctuation.definition.comment.js' } },
        match: new RegExp('^(#!)[^\\n]*(?=(?=\\n?$))', 'dgv'),
        name: 'comment.line.shebang.js',
      },
      'single-line-comment-consuming-line-ending': {
        begin: new RegExp(
          '(^[ \\t]+)?((\\/\\/)(?:\\p{space}*((@)internal)(?=\\p{space}|(?=\\n?$)))?)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'punctuation.whitespace.comment.leading.js' },
          2: { name: 'comment.line.double-slash.js' },
          3: { name: 'punctuation.definition.comment.js' },
          4: { name: 'storage.type.internaldeclaration.js' },
          5: { name: 'punctuation.decorator.internaldeclaration.js' },
        },
        contentName: 'comment.line.double-slash.js',
        end: new RegExp('(?=^)', 'dgv'),
      },
      statements: {
        patterns: [
          { include: '#declaration' },
          { include: '#control-statement' },
          { include: '#after-operator-block-as-object-literal' },
          { include: '#decl-block' },
          { include: '#label' },
          { include: '#expression' },
          { include: '#punctuation-semicolon' },
          { include: '#string' },
          { include: '#comment' },
        ],
      },
      string: {
        patterns: [
          { include: '#qstring-single' },
          { include: '#qstring-double' },
          { include: '#template' },
        ],
      },
      'string-character-escape': {
        match: new RegExp(
          '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|u\\{[0-9A-Fa-f]+\\}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|[^\\n]|(?=\\n?$))',
          'dgv',
        ),
        name: 'constant.character.escape.js',
      },
      'super-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)',
          'dgv',
        ),
        name: 'variable.language.super.js',
      },
      'support-function-call-identifiers': {
        patterns: [
          { include: '#literal' },
          { include: '#support-objects' },
          { include: '#object-identifiers' },
          { include: '#punctuation-accessor' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\p{space}*[\\(]\\p{space}*["\'\\`])',
              'dgv',
            ),
            name: 'keyword.operator.expression.import.js',
          },
        ],
      },
      'support-objects': {
        patterns: [
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(arguments)\\b(?!\\$)',
              'dgv',
            ),
            name: 'variable.language.arguments.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)',
              'dgv',
            ),
            name: 'support.class.promise.js',
          },
          {
            captures: {
              1: { name: 'keyword.control.import.js' },
              2: { name: 'punctuation.accessor.js' },
              3: { name: 'punctuation.accessor.optional.js' },
              4: { name: 'support.variable.property.importmeta.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(meta)\\b(?!\\$)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'keyword.operator.new.js' },
              2: { name: 'punctuation.accessor.js' },
              3: { name: 'punctuation.accessor.optional.js' },
              4: { name: 'support.variable.property.target.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(target)\\b(?!\\$)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.js' },
              2: { name: 'punctuation.accessor.optional.js' },
              3: { name: 'support.variable.property.js' },
              4: { name: 'support.constant.js' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\p{space}*(<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'support.type.object.module.js' },
              2: { name: 'support.type.object.module.js' },
              3: { name: 'punctuation.accessor.js' },
              4: { name: 'punctuation.accessor.optional.js' },
              5: { name: 'support.type.object.module.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(exports)|(module)(?:(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))(exports|id|filename|loaded|parent|children))?)\\b(?!\\$)',
              'dgv',
            ),
          },
        ],
      },
      'switch-statement': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?=\\bswitch\\p{space}*\\()',
          'dgv',
        ),
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'switch-statement.expr.js',
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\p{space}*(\\()',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.switch.js' },
              2: { name: 'meta.brace.round.js' },
            },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.js' } },
            name: 'switch-expression.expr.js',
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp('\\{', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
            end: new RegExp('(?=\\})', 'dgv'),
            name: 'switch-block.expr.js',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'keyword.control.switch.js' } },
                end: new RegExp('(?=:)', 'dgv'),
                name: 'case-clause.expr.js',
                patterns: [{ include: '#expression' }],
              },
              {
                begin: new RegExp('(:)\\p{space}*(\\{)', 'dgv'),
                beginCaptures: {
                  1: {
                    name: 'case-clause.expr.js punctuation.definition.section.case-statement.js',
                  },
                  2: { name: 'meta.block.js punctuation.definition.block.js' },
                },
                contentName: 'meta.block.js',
                end: new RegExp('\\}', 'dgv'),
                endCaptures: { 0: { name: 'meta.block.js punctuation.definition.block.js' } },
                patterns: [{ include: '#statements' }],
              },
              {
                captures: {
                  0: {
                    name: 'case-clause.expr.js punctuation.definition.section.case-statement.js',
                  },
                },
                match: new RegExp('(:)', 'dgv'),
              },
              { include: '#statements' },
            ],
          },
        ],
      },
      template: {
        patterns: [
          { include: '#template-call' },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)?(`)', 'dgv'),
            beginCaptures: {
              1: { name: 'entity.name.function.tagged-template.js' },
              2: { name: 'string.template.js punctuation.definition.string.template.begin.js' },
            },
            contentName: 'string.template.js',
            end: new RegExp('`', 'dgv'),
            endCaptures: {
              0: { name: 'string.template.js punctuation.definition.string.template.end.js' },
            },
            patterns: [
              { include: '#template-substitution-element' },
              { include: '#string-character-escape' },
            ],
          },
        ],
      },
      'template-call': {
        patterns: [
          {
            begin: new RegExp(
              '(?=(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*\\??\\.\\p{space}*)*|(\\??\\.\\p{space}*)?)([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)?`)',
              'dgv',
            ),
            end: new RegExp('(?=`)', 'dgv'),
            patterns: [
              {
                begin: new RegExp(
                  '(?=(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*\\??\\.\\p{space}*)*|(\\??\\.\\p{space}*)?)([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))',
                  'dgv',
                ),
                end: new RegExp(
                  '(?=(<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)?`)',
                  'dgv',
                ),
                patterns: [
                  { include: '#support-function-call-identifiers' },
                  {
                    match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
                    name: 'entity.name.function.tagged-template.js',
                  },
                ],
              },
              { include: '#type-arguments' },
            ],
          },
          {
            begin: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)?\\p{space}*(?=(<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))(([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>|<\\p{space}*(((keyof|infer|typeof|readonly)\\p{space}+)|(([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))(?=\\p{space}*([\\<\\>\\,\\.\\[]|=>|&(?!&)|\\|(?!\\|)))))([^\\<\\>\\(]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\p{space}*)`)',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'entity.name.function.tagged-template.js' } },
            end: new RegExp('(?=`)', 'dgv'),
            patterns: [{ include: '#type-arguments' }],
          },
        ],
      },
      'template-substitution-element': {
        begin: new RegExp('\\$\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.template-expression.begin.js' } },
        contentName: 'meta.embedded.line.js',
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.template-expression.end.js' } },
        name: 'meta.template.expression.js',
        patterns: [{ include: '#expression' }],
      },
      'template-type': {
        patterns: [
          { include: '#template-call' },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)?(`)', 'dgv'),
            beginCaptures: {
              1: { name: 'entity.name.function.tagged-template.js' },
              2: { name: 'string.template.js punctuation.definition.string.template.begin.js' },
            },
            contentName: 'string.template.js',
            end: new RegExp('`', 'dgv'),
            endCaptures: {
              0: { name: 'string.template.js punctuation.definition.string.template.end.js' },
            },
            patterns: [
              { include: '#template-type-substitution-element' },
              { include: '#string-character-escape' },
            ],
          },
        ],
      },
      'template-type-substitution-element': {
        begin: new RegExp('\\$\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.template-expression.begin.js' } },
        contentName: 'meta.embedded.line.js',
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.template-expression.end.js' } },
        name: 'meta.template.expression.js',
        patterns: [{ include: '#type' }],
      },
      'ternary-expression': {
        begin: new RegExp('(?!\\?\\.\\p{space}*[^\\p{Nd}])(\\?)(?!\\?)', 'dgv'),
        beginCaptures: { 1: { name: 'keyword.operator.ternary.js' } },
        end: new RegExp('\\p{space}*(:)', 'dgv'),
        endCaptures: { 1: { name: 'keyword.operator.ternary.js' } },
        patterns: [{ include: '#expression' }],
      },
      'this-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)',
          'dgv',
        ),
        name: 'variable.language.this.js',
      },
      type: {
        patterns: [
          { include: '#comment' },
          { include: '#type-string' },
          { include: '#numeric-literal' },
          { include: '#type-primitive' },
          { include: '#type-builtin-literals' },
          { include: '#type-parameters' },
          { include: '#type-tuple' },
          { include: '#type-object' },
          { include: '#type-operators' },
          { include: '#type-conditional' },
          { include: '#type-fn-type-parameters' },
          { include: '#type-paren-or-function-parameters' },
          { include: '#type-function-return-type' },
          {
            captures: { 1: { name: 'storage.modifier.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(readonly)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
              'dgv',
            ),
          },
          { include: '#type-name' },
        ],
      },
      'type-alias-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(type)\\b\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.js' },
          2: { name: 'storage.modifier.js' },
          3: { name: 'storage.type.type.js' },
          4: { name: 'entity.name.type.alias.js' },
        },
        end: new RegExp(
          '(?=\\}|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
          'dgv',
        ),
        name: 'meta.type.declaration.js',
        patterns: [
          { include: '#comment' },
          { include: '#type-parameters' },
          {
            begin: new RegExp(
              '(=)\\p{space}*(intrinsic)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.operator.assignment.js' },
              2: { name: 'keyword.control.intrinsic.js' },
            },
            end: new RegExp(
              '(?=\\}|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(=)\\p{space}*', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.assignment.js' } },
            end: new RegExp(
              '(?=\\}|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'type-annotation': {
        patterns: [
          {
            begin: new RegExp('(:)(?=\\p{space}*\\P{space})', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])(?!\\p{space}*[\\|\\&]\\p{space}+)((?=^|[\\,\\)\\;\\}\\]]|\\/\\/)|(?==[^\\>])|((?<=[\\}\\>\\]\\)]|[_\\$\\p{Alpha}])\\p{space}*(?=\\{)))',
              'dgv',
            ),
            name: 'meta.type.annotation.js',
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.js' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])((?=[\\,\\)\\;\\}\\]]|\\/\\/)|(?==[^\\>])|(?=^\\p{space}*(?=\\n?$))|((?<=[\\}\\>\\]\\)]|[_\\$\\p{Alpha}])\\p{space}*(?=\\{)))',
              'dgv',
            ),
            name: 'meta.type.annotation.js',
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'type-arguments': {
        begin: new RegExp('<', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.typeparameters.begin.js' } },
        end: new RegExp('>', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.typeparameters.end.js' } },
        name: 'meta.type.parameters.js',
        patterns: [{ include: '#type-arguments-body' }],
      },
      'type-arguments-body': {
        patterns: [
          {
            captures: { 0: { name: 'keyword.operator.type.js' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(_)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
          },
          { include: '#type' },
          { include: '#punctuation-comma' },
        ],
      },
      'type-builtin-literals': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(this|true|false|undefined|null|object)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'support.type.builtin.js',
      },
      'type-conditional': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\p{space}+',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.js' } },
            end: new RegExp('(?<=:)', 'dgv'),
            patterns: [
              {
                begin: new RegExp('\\?', 'dgv'),
                beginCaptures: { 0: { name: 'keyword.operator.ternary.js' } },
                end: new RegExp(':', 'dgv'),
                endCaptures: { 0: { name: 'keyword.operator.ternary.js' } },
                patterns: [{ include: '#type' }],
              },
              { include: '#type' },
            ],
          },
        ],
      },
      'type-fn-type-parameters': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\p{space}+)?(new)\\b(?=\\p{space}*<)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'meta.type.constructor.js storage.modifier.js' },
              2: { name: 'meta.type.constructor.js keyword.control.new.js' },
            },
            end: new RegExp('(?<=>)', 'dgv'),
            patterns: [{ include: '#comment' }, { include: '#type-parameters' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(abstract)\\p{space}+)?(new)\\b\\p{space}*(?=\\()',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.control.new.js' },
            },
            end: new RegExp('(?<=\\))', 'dgv'),
            name: 'meta.type.constructor.js',
            patterns: [{ include: '#function-parameters' }],
          },
          {
            begin: new RegExp(
              '((?=[\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>))))))',
              'dgv',
            ),
            end: new RegExp('(?<=\\))', 'dgv'),
            name: 'meta.type.function.js',
            patterns: [{ include: '#function-parameters' }],
          },
        ],
      },
      'type-function-return-type': {
        patterns: [
          {
            begin: new RegExp('(=>)(?=\\p{space}*\\P{space})', 'dgv'),
            beginCaptures: { 1: { name: 'storage.type.function.arrow.js' } },
            end: new RegExp(
              '(?<!=>)(?<![\\|\\&])(?=[\\,\\]\\)\\{\\}\\=\\;\\>\\:\\?]|\\/\\/|(?=\\n?$))',
              'dgv',
            ),
            name: 'meta.type.function.return.js',
            patterns: [{ include: '#type-function-return-type-core' }],
          },
          {
            begin: new RegExp('=>', 'dgv'),
            beginCaptures: { 0: { name: 'storage.type.function.arrow.js' } },
            end: new RegExp(
              '(?<!=>)(?<![\\|\\&])((?=[\\,\\]\\)\\{\\}\\=\\;\\:\\?\\>]|\\/\\/|^\\p{space}*(?=\\n?$))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.type.function.return.js',
            patterns: [{ include: '#type-function-return-type-core' }],
          },
        ],
      },
      'type-function-return-type-core': {
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp('(?<==>)(?=\\p{space}*\\{)', 'dgv'),
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#type-object' }],
          },
          { include: '#type-predicate-operator' },
          { include: '#type' },
        ],
      },
      'type-infer': {
        patterns: [
          {
            captures: {
              1: { name: 'keyword.operator.expression.infer.js' },
              2: { name: 'entity.name.type.js' },
              3: { name: 'keyword.operator.expression.extends.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\p{space}+(extends)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))?',
              'dgv',
            ),
            name: 'meta.type.infer.js',
          },
        ],
      },
      'type-name': {
        patterns: [
          {
            begin: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(<)',
              'dgv',
            ),
            captures: {
              1: { name: 'entity.name.type.module.js' },
              2: { name: 'punctuation.accessor.js' },
              3: { name: 'punctuation.accessor.optional.js' },
              4: { name: 'meta.type.parameters.js punctuation.definition.typeparameters.begin.js' },
            },
            contentName: 'meta.type.parameters.js',
            end: new RegExp('(>)', 'dgv'),
            endCaptures: {
              1: { name: 'meta.type.parameters.js punctuation.definition.typeparameters.end.js' },
            },
            patterns: [{ include: '#type-arguments-body' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(<)', 'dgv'),
            beginCaptures: {
              1: { name: 'entity.name.type.js' },
              2: { name: 'meta.type.parameters.js punctuation.definition.typeparameters.begin.js' },
            },
            contentName: 'meta.type.parameters.js',
            end: new RegExp('(>)', 'dgv'),
            endCaptures: {
              1: { name: 'meta.type.parameters.js punctuation.definition.typeparameters.end.js' },
            },
            patterns: [{ include: '#type-arguments-body' }],
          },
          {
            captures: {
              1: { name: 'entity.name.type.module.js' },
              2: { name: 'punctuation.accessor.js' },
              3: { name: 'punctuation.accessor.optional.js' },
            },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))',
              'dgv',
            ),
          },
          {
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'entity.name.type.js',
          },
        ],
      },
      'type-object': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.js' } },
        name: 'meta.object.type.js',
        patterns: [
          { include: '#comment' },
          { include: '#method-declaration' },
          { include: '#indexer-declaration' },
          { include: '#indexer-mapped-type-declaration' },
          { include: '#field-declaration' },
          { include: '#type-annotation' },
          {
            begin: new RegExp('\\.\\.\\.', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.spread.js' } },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            patterns: [{ include: '#type' }],
          },
          { include: '#punctuation-comma' },
          { include: '#punctuation-semicolon' },
          { include: '#type' },
        ],
      },
      'type-operators': {
        patterns: [
          { include: '#typeof-operator' },
          { include: '#type-infer' },
          {
            begin: new RegExp('([\\&\\|])(?=\\p{space}*\\{)', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.type.js' } },
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#type-object' }],
          },
          {
            begin: new RegExp('[\\&\\|]', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.type.js' } },
            end: new RegExp('(?=\\P{space})', 'dgv'),
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.keyof.js',
          },
          { match: new RegExp('(\\?|:)', 'dgv'), name: 'keyword.operator.ternary.js' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\p{space}*\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.import.js',
          },
        ],
      },
      'type-parameters': {
        begin: new RegExp('(<)', 'dgv'),
        beginCaptures: { 1: { name: 'punctuation.definition.typeparameters.begin.js' } },
        end: new RegExp('(>)', 'dgv'),
        endCaptures: { 1: { name: 'punctuation.definition.typeparameters.end.js' } },
        name: 'meta.type.parameters.js',
        patterns: [
          { include: '#comment' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'storage.modifier.js',
          },
          { include: '#type' },
          { include: '#punctuation-comma' },
          { match: new RegExp('(=)(?!>)', 'dgv'), name: 'keyword.operator.assignment.js' },
        ],
      },
      'type-paren-or-function-parameters': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'meta.brace.round.js' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.round.js' } },
        name: 'meta.type.paren.cover.js',
        patterns: [
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'entity.name.function.js variable.language.this.js' },
              4: { name: 'entity.name.function.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}*(\\??)(?=\\p{space}*(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.js' },
              2: { name: 'keyword.operator.rest.js' },
              3: { name: 'variable.parameter.js variable.language.this.js' },
              4: { name: 'variable.parameter.js' },
              5: { name: 'keyword.operator.optional.js' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}*(\\??)(?=:)',
              'dgv',
            ),
          },
          { include: '#type-annotation' },
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.js' },
          { include: '#type' },
        ],
      },
      'type-predicate-operator': {
        patterns: [
          {
            captures: {
              1: { name: 'keyword.operator.type.asserts.js' },
              2: { name: 'variable.parameter.js variable.language.this.js' },
              3: { name: 'variable.parameter.js' },
              4: { name: 'keyword.operator.expression.is.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\p{space}+)?(?!asserts)(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}(is)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'keyword.operator.type.asserts.js' },
              2: { name: 'variable.parameter.js variable.language.this.js' },
              3: { name: 'variable.parameter.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(asserts)\\p{space}+(?!is)(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))asserts(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.type.asserts.js',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.is.js',
          },
        ],
      },
      'type-primitive': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'support.type.primitive.js',
      },
      'type-string': {
        patterns: [
          { include: '#qstring-single' },
          { include: '#qstring-double' },
          { include: '#template-type' },
        ],
      },
      'type-tuple': {
        begin: new RegExp('\\[', 'dgv'),
        beginCaptures: { 0: { name: 'meta.brace.square.js' } },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.square.js' } },
        name: 'meta.type.tuple.js',
        patterns: [
          { match: new RegExp('\\.\\.\\.', 'dgv'), name: 'keyword.operator.rest.js' },
          {
            captures: {
              1: { name: 'entity.name.label.js' },
              2: { name: 'keyword.operator.optional.js' },
              3: { name: 'punctuation.separator.label.js' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(\\?)?\\p{space}*(:)',
              'dgv',
            ),
          },
          { include: '#type' },
          { include: '#punctuation-comma' },
        ],
      },
      'typeof-operator': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))typeof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        beginCaptures: { 0: { name: 'keyword.operator.expression.typeof.js' } },
        end: new RegExp(
          '(?=[\\,\\)\\;\\}\\]\\=\\>\\:\\&\\|\\{\\?]|(extends\\p{space}+)|(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
          'dgv',
        ),
        patterns: [{ include: '#type-arguments' }, { include: '#expression' }],
      },
      'undefined-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))undefined(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'constant.language.undefined.js',
      },
      'var-expr': {
        patterns: [
          {
            begin: new RegExp(
              '(?=(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(var|let)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))',
              'dgv',
            ),
            end: new RegExp(
              '(?!(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(var|let)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|((?<!^let|[^\\._\\$\\p{Alpha}\\p{Nd}]let|^var|[^\\._\\$\\p{Alpha}\\p{Nd}]var)(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.var.expr.js',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(var|let)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.js' },
                  2: { name: 'storage.modifier.js' },
                  3: { name: 'storage.type.js' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#destructuring-variable' },
              { include: '#var-single-variable' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*(?=(?=\\n?$)|\\/\\/)', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.js' } },
                end: new RegExp(
                  '(?<!,)(((?==|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|^\\p{space}*(?=\\n?$)))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
                  'dgv',
                ),
                patterns: [
                  { include: '#single-line-comment-consuming-line-ending' },
                  { include: '#comment' },
                  { include: '#destructuring-variable' },
                  { include: '#var-single-variable' },
                  { include: '#punctuation-comma' },
                ],
              },
              { include: '#punctuation-comma' },
            ],
          },
          {
            begin: new RegExp(
              '(?=(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(const(?!\\p{space}+enum\\b))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'storage.type.js' },
            },
            end: new RegExp(
              '(?!(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(const(?!\\p{space}+enum\\b))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|((?<!^const|[^\\._\\$\\p{Alpha}\\p{Nd}]const)(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.var.expr.js',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(const(?!\\p{space}+enum\\b))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.js' },
                  2: { name: 'storage.modifier.js' },
                  3: { name: 'storage.type.js' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#destructuring-const' },
              { include: '#var-single-const' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*(?=(?=\\n?$)|\\/\\/)', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.js' } },
                end: new RegExp(
                  '(?<!,)(((?==|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|^\\p{space}*(?=\\n?$)))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
                  'dgv',
                ),
                patterns: [
                  { include: '#single-line-comment-consuming-line-ending' },
                  { include: '#comment' },
                  { include: '#destructuring-const' },
                  { include: '#var-single-const' },
                  { include: '#punctuation-comma' },
                ],
              },
              { include: '#punctuation-comma' },
            ],
          },
          {
            begin: new RegExp(
              '(?=(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.js' },
              2: { name: 'storage.modifier.js' },
              3: { name: 'storage.type.js' },
            },
            end: new RegExp(
              '(?!(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|((?<!^using|[^\\._\\$\\p{Alpha}\\p{Nd}]using|^await\\p{space}+using|[^\\._\\$\\p{Alpha}\\p{Nd}]await\\p{space}+using)(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.var.expr.js',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.js' },
                  2: { name: 'storage.modifier.js' },
                  3: { name: 'storage.type.js' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#var-single-const' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*((?!\\P{space})|(?=\\/\\/))', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.js' } },
                end: new RegExp(
                  '(?<!,)(((?==|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|^\\p{space}*(?=\\n?$)))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
                  'dgv',
                ),
                patterns: [
                  { include: '#single-line-comment-consuming-line-ending' },
                  { include: '#comment' },
                  { include: '#var-single-const' },
                  { include: '#punctuation-comma' },
                ],
              },
              { include: '#punctuation-comma' },
            ],
          },
        ],
      },
      'var-single-const': {
        patterns: [
          {
            begin: new e(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
            beginCaptures: {
              1: {
                name: 'meta.definition.variable.js variable.other.constant.js entity.name.function.js',
              },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.js',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            beginCaptures: {
              1: { name: 'meta.definition.variable.js variable.other.constant.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.js',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
        ],
      },
      'var-single-variable': {
        patterns: [
          {
            begin: new e(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(!)?(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|([\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|([\\<]\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}+extends\\p{space}*[^\\=\\>])|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
            beginCaptures: {
              1: { name: 'meta.definition.variable.js entity.name.function.js' },
              2: { name: 'keyword.operator.definiteassignment.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.js',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp(
              '([\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)(?![_\\$\\p{Alpha}\\p{Nd}])(!)?',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'meta.definition.variable.js variable.other.constant.js' },
              2: { name: 'keyword.operator.definiteassignment.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.js',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(!)?', 'dgv'),
            beginCaptures: {
              1: { name: 'meta.definition.variable.js variable.other.readwrite.js' },
              2: { name: 'keyword.operator.definiteassignment.js' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.js',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
        ],
      },
      'var-single-variable-type-annotation': {
        patterns: [
          { include: '#type-annotation' },
          { include: '#string' },
          { include: '#comment' },
        ],
      },
      'variable-initializer': {
        patterns: [
          {
            begin: new RegExp(
              '(?<!=|!)(=)(?!=)(?=\\p{space}*\\P{space})(?!\\p{space}*[^\\n]*=>\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'keyword.operator.assignment.js' } },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\,\\)\\;\\}\\]]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp('(?<!=|!)(=)(?!=)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.assignment.js' } },
            end: new RegExp(
              '(?=[\\,\\)\\;\\}\\]]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))|(?=^\\p{space}*(?=\\n?$))|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\P{space})(?<!=)(?=\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
        ],
      },
    },
    scopeName: 'source.js',
    embeddedLangs: void 0,
    aliases: ['js'],
  }),
  t = [p];
export { t as default };
