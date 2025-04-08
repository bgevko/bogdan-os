import { E as e } from './KJnl7Sfk.js';
import './CTNqAv02.js';
const p = Object.freeze({
    displayName: 'TypeScript',
    name: 'typescript',
    patterns: [{ include: '#directives' }, { include: '#statements' }, { include: '#shebang' }],
    repository: {
      'access-modifier': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'storage.modifier.ts',
      },
      'after-operator-block-as-object-literal': {
        begin: new RegExp(
          '(?<!\\+\\+|--)(?<=[\\:\\=\\(\\,\\[\\?\\+\\!\\>]|^await|[^\\._\\$\\p{Alpha}\\p{Nd}]await|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^yield|[^\\._\\$\\p{Alpha}\\p{Nd}]yield|^throw|[^\\._\\$\\p{Alpha}\\p{Nd}]throw|^in|[^\\._\\$\\p{Alpha}\\p{Nd}]in|^of|[^\\._\\$\\p{Alpha}\\p{Nd}]of|^typeof|[^\\._\\$\\p{Alpha}\\p{Nd}]typeof|&&|\\|\\||\\*)\\p{space}*(\\{)',
          'dgv',
        ),
        beginCaptures: { 1: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'meta.objectliteral.ts',
        patterns: [{ include: '#object-member' }],
      },
      'array-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.array.ts' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.ts' } },
        patterns: [{ include: '#binding-element' }, { include: '#punctuation-comma' }],
      },
      'array-binding-pattern-const': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.array.ts' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.ts' } },
        patterns: [{ include: '#binding-element-const' }, { include: '#punctuation-comma' }],
      },
      'array-literal': {
        begin: new RegExp('\\p{space}*(\\[)', 'dgv'),
        beginCaptures: { 1: { name: 'meta.brace.square.ts' } },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.square.ts' } },
        name: 'meta.array.literal.ts',
        patterns: [{ include: '#expression' }, { include: '#punctuation-comma' }],
      },
      'arrow-function': {
        patterns: [
          {
            captures: {
              1: { name: 'storage.modifier.async.ts' },
              2: { name: 'variable.parameter.ts' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync)\\p{space}+)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?==>)',
              'dgv',
            ),
            name: 'meta.arrow.ts',
          },
          {
            begin: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(\\basync))?((?<![\\}\\)\\!\\]])\\p{space}*(?=((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.ts' } },
            end: new RegExp(
              '(?==>|\\{|(^\\p{space}*(export|function|class|interface|let|var|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|const|import|enum|namespace|module|type|abstract|declare)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.arrow.ts',
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
            beginCaptures: { 0: { name: 'storage.type.function.arrow.ts' } },
            end: new RegExp(
              '((?<=\\}|\\P{space})(?<!=>)|((?!\\{)(?=\\P{space})))(?!\\/[\\/\\*])',
              'dgv',
            ),
            name: 'meta.arrow.ts',
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
        beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
        end: new RegExp(
          '(?==>|\\{|(^\\p{space}*(export|function|class|interface|let|var|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|const|import|enum|namespace|module|type|abstract|declare)\\p{space}+))',
          'dgv',
        ),
        name: 'meta.return.type.arrow.ts',
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
        name: 'storage.modifier.async.ts',
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
            name: 'constant.language.boolean.true.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))false(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.boolean.false.ts',
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
      cast: {
        patterns: [
          {
            captures: {
              1: { name: 'meta.brace.angle.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'meta.brace.angle.ts' },
            },
            match: new RegExp('\\p{space}*(<)\\p{space}*(const)\\p{space}*(>)', 'dgv'),
            name: 'cast.expr.ts',
          },
          {
            begin: new RegExp(
              '(?<!\\+\\+|--)(?<=^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^throw|[^\\._\\$\\p{Alpha}\\p{Nd}]throw|^yield|[^\\._\\$\\p{Alpha}\\p{Nd}]yield|^await|[^\\._\\$\\p{Alpha}\\p{Nd}]await|^default|[^\\._\\$\\p{Alpha}\\p{Nd}]default|[\\=\\(\\,\\:\\>\\*\\?\\&\\|\\^]|[^_\\$\\p{Alpha}\\p{Nd}](?:\\+\\+|--)|[^\\+]\\+|[^\\-]-)\\p{space}*(<)(?!<?=)(?!\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'meta.brace.angle.ts' } },
            end: new RegExp('(>)', 'dgv'),
            endCaptures: { 1: { name: 'meta.brace.angle.ts' } },
            name: 'cast.expr.ts',
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp(
              '(?<=^)\\p{space}*(<)(?=[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*>)',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'meta.brace.angle.ts' } },
            end: new RegExp('(>)', 'dgv'),
            endCaptures: { 1: { name: 'meta.brace.angle.ts' } },
            name: 'cast.expr.ts',
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'class-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(?:(abstract)\\p{space}+)?\\b(class)\\b(?=\\p{space}+|\\/[\\/\\*])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.modifier.ts' },
          4: { name: 'storage.type.class.ts' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.class.ts',
        patterns: [{ include: '#class-declaration-or-expression-patterns' }],
      },
      'class-declaration-or-expression-patterns': {
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          {
            captures: { 0: { name: 'entity.name.type.class.ts' } },
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
        beginCaptures: { 1: { name: 'storage.modifier.ts' }, 2: { name: 'storage.type.class.ts' } },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.class.ts',
        patterns: [{ include: '#class-declaration-or-expression-patterns' }],
      },
      'class-or-interface-body': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
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
        beginCaptures: { 1: { name: 'storage.modifier.ts' } },
        end: new RegExp('(?=\\{)', 'dgv'),
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          { include: '#type-parameters' },
          { include: '#expressionWithoutIdentifiers' },
          {
            captures: {
              1: { name: 'entity.name.type.module.ts' },
              2: { name: 'punctuation.accessor.ts' },
              3: { name: 'punctuation.accessor.optional.ts' },
            },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))(?=\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*(\\p{space}*\\??\\.\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)*\\p{space}*)',
              'dgv',
            ),
          },
          {
            captures: { 1: { name: 'entity.other.inherited-class.ts' } },
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
          },
          { include: '#expressionPunctuations' },
        ],
      },
      comment: {
        patterns: [
          {
            begin: new RegExp('\\/\\*\\*(?!\\/)', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.comment.ts' } },
            end: new RegExp('\\*\\/', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.comment.ts' } },
            name: 'comment.block.documentation.ts',
            patterns: [{ include: '#docblock' }],
          },
          {
            begin: new RegExp(
              '(\\/\\*)(?:\\p{space}*((@)internal)(?=\\p{space}|(\\*\\/)))?',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'punctuation.definition.comment.ts' },
              2: { name: 'storage.type.internaldeclaration.ts' },
              3: { name: 'punctuation.decorator.internaldeclaration.ts' },
            },
            end: new RegExp('\\*\\/', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.comment.ts' } },
            name: 'comment.block.ts',
          },
          {
            begin: new RegExp(
              '(^[ \\t]+)?((\\/\\/)(?:\\p{space}*((@)internal)(?=\\p{space}|(?=\\n?$)))?)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'punctuation.whitespace.comment.leading.ts' },
              2: { name: 'comment.line.double-slash.ts' },
              3: { name: 'punctuation.definition.comment.ts' },
              4: { name: 'storage.type.internaldeclaration.ts' },
              5: { name: 'punctuation.decorator.internaldeclaration.ts' },
            },
            contentName: 'comment.line.double-slash.ts',
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
            name: 'keyword.control.trycatch.ts',
          },
          {
            captures: {
              1: { name: 'keyword.control.loop.ts' },
              2: { name: 'entity.name.label.ts' },
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
            name: 'keyword.control.loop.ts',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(return)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            beginCaptures: { 0: { name: 'keyword.control.flow.ts' } },
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
            name: 'keyword.control.switch.ts',
          },
          { include: '#if-statement' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(else|if)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.conditional.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(with)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.with.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(package)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.control.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(debugger)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.other.debugger.ts',
          },
        ],
      },
      'decl-block': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'meta.block.ts',
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
            name: 'storage.modifier.ts',
          },
        ],
      },
      decorator: {
        begin: new RegExp('(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))@', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.decorator.ts' } },
        end: new RegExp('(?=\\p{space})', 'dgv'),
        name: 'meta.decorator.ts',
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
            name: 'meta.object-binding-pattern-variable.ts',
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
            name: 'meta.array-binding-pattern-variable.ts',
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
              1: { name: 'keyword.operator.rest.ts' },
              2: { name: 'punctuation.definition.binding-pattern.object.ts' },
            },
            end: new RegExp('\\}', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.ts' } },
            name: 'meta.parameter.object-binding-pattern.ts',
            patterns: [{ include: '#parameter-object-binding-element' }],
          },
          {
            begin: new RegExp('(?<!=|:)\\p{space}*(?:(\\.\\.\\.)\\p{space}*)?(\\[)', 'dgv'),
            beginCaptures: {
              1: { name: 'keyword.operator.rest.ts' },
              2: { name: 'punctuation.definition.binding-pattern.array.ts' },
            },
            end: new RegExp('\\]', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.ts' } },
            name: 'meta.paramter.array-binding-pattern.ts',
            patterns: [
              { include: '#parameter-binding-element' },
              { include: '#punctuation-comma' },
            ],
          },
        ],
      },
      'destructuring-parameter-rest': {
        captures: { 1: { name: 'keyword.operator.rest.ts' }, 2: { name: 'variable.parameter.ts' } },
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
            name: 'meta.object-binding-pattern-variable.ts',
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
            name: 'meta.array-binding-pattern-variable.ts',
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
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'meta.definition.variable.ts variable.other.readwrite.ts' },
        },
        match: new RegExp(
          '(?:(\\.\\.\\.)\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
          'dgv',
        ),
      },
      'destructuring-variable-rest-const': {
        captures: {
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'meta.definition.variable.ts variable.other.constant.ts' },
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
        beginCaptures: { 1: { name: 'punctuation.definition.comment.ts' } },
        end: new RegExp('(?=(?=\\n?$))', 'dgv'),
        name: 'comment.line.triple-slash.directive.ts',
        patterns: [
          {
            begin: new RegExp('(<)(reference|amd-dependency|amd-module)', 'dgv'),
            beginCaptures: {
              1: { name: 'punctuation.definition.tag.directive.ts' },
              2: { name: 'entity.name.tag.directive.ts' },
            },
            end: new RegExp('\\/>', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.tag.directive.ts' } },
            name: 'meta.tag.ts',
            patterns: [
              {
                match: new RegExp('path|types|no-default-lib|lib|name|resolution-mode', 'dgv'),
                name: 'entity.other.attribute-name.directive.ts',
              },
              { match: new RegExp('=', 'dgv'), name: 'keyword.operator.assignment.ts' },
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
                captures: { 0: { name: 'source.embedded.ts' } },
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
                  3: { name: 'source.embedded.ts' },
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
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.modifier.ts' },
          4: { name: 'storage.type.enum.ts' },
          5: { name: 'entity.name.type.enum.ts' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.enum.declaration.ts',
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp('\\{', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
            end: new RegExp('\\}', 'dgv'),
            endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
            patterns: [
              { include: '#comment' },
              {
                begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
                beginCaptures: { 0: { name: 'variable.other.enummember.ts' } },
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
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'keyword.control.as.ts' },
              3: { name: 'storage.type.namespace.ts' },
              4: { name: 'entity.name.type.module.ts' },
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
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'keyword.control.type.ts' },
              3: { name: 'keyword.operator.assignment.ts' },
              4: { name: 'keyword.control.default.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            name: 'meta.export.default.ts',
            patterns: [{ include: '#interface-declaration' }, { include: '#expression' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(export)(?:\\p{space}+(type))?\\b(?!(\\$)|(\\p{space}*:))((?=\\p{space}*[\\{\\*])|((?=\\p{space}*[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*(\\p{space}|,))(?!\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'keyword.control.type.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            name: 'meta.export.ts',
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
            captures: { 1: { name: 'storage.modifier.ts' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\p{space}+(?=(override|public|protected|private|readonly)\\p{space}+)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'entity.name.function.ts variable.language.this.ts' },
              4: { name: 'entity.name.function.ts' },
              5: { name: 'keyword.operator.optional.ts' },
            },
            match: new e(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'variable.parameter.ts variable.language.this.ts' },
              4: { name: 'variable.parameter.ts' },
              5: { name: 'keyword.operator.optional.ts' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*[\\:\\,]|(?=\\n?$))',
              'dgv',
            ),
          },
          { include: '#type-annotation' },
          { include: '#variable-initializer' },
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.ts' },
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
            name: 'keyword.control.flow.ts',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(yield)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?=\\p{space}*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*\\*)',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'keyword.control.flow.ts' } },
            end: new RegExp('\\*', 'dgv'),
            endCaptures: { 0: { name: 'keyword.generator.asterisk.ts' } },
            patterns: [{ include: '#comment' }],
          },
          {
            captures: {
              1: { name: 'keyword.control.flow.ts' },
              2: { name: 'keyword.generator.asterisk.ts' },
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
            name: 'keyword.operator.expression.delete.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))in(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.in.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))of(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?!\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.of.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))instanceof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.instanceof.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.new.ts',
          },
          { include: '#typeof-operator' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))void(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.void.ts',
          },
          {
            captures: { 1: { name: 'keyword.control.as.ts' }, 2: { name: 'storage.modifier.ts' } },
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
              1: { name: 'keyword.control.as.ts' },
              2: { name: 'keyword.control.satisfies.ts' },
            },
            end: new RegExp(
              '(?=^|[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisfies)\\p{space}+)|(\\p{space}+<))',
              'dgv',
            ),
            patterns: [{ include: '#type' }],
          },
          { match: new RegExp('\\.\\.\\.', 'dgv'), name: 'keyword.operator.spread.ts' },
          {
            match: new RegExp('\\*=|(?<!\\()\\/=|%=|\\+=|-=', 'dgv'),
            name: 'keyword.operator.assignment.compound.ts',
          },
          {
            match: new RegExp('&=|\\^=|<<=|>>=|>>>=|\\|=', 'dgv'),
            name: 'keyword.operator.assignment.compound.bitwise.ts',
          },
          { match: new RegExp('<<|>>>|>>', 'dgv'), name: 'keyword.operator.bitwise.shift.ts' },
          { match: new RegExp('===|!==|==|!=', 'dgv'), name: 'keyword.operator.comparison.ts' },
          { match: new RegExp('<=|>=|<>|<|>', 'dgv'), name: 'keyword.operator.relational.ts' },
          {
            captures: {
              1: { name: 'keyword.operator.logical.ts' },
              2: { name: 'keyword.operator.assignment.compound.ts' },
              3: { name: 'keyword.operator.arithmetic.ts' },
            },
            match: new RegExp(
              '(?<=[_\\$\\p{Alpha}\\p{Nd}])(!)\\p{space}*(?:(\\/=)|(\\/)(?![\\/\\*]))',
              'dgv',
            ),
          },
          { match: new RegExp('!|&&|\\|\\||\\?\\?', 'dgv'), name: 'keyword.operator.logical.ts' },
          { match: new RegExp('&|~|\\^|\\|', 'dgv'), name: 'keyword.operator.bitwise.ts' },
          { match: new RegExp('=', 'dgv'), name: 'keyword.operator.assignment.ts' },
          { match: new RegExp('--', 'dgv'), name: 'keyword.operator.decrement.ts' },
          { match: new RegExp('\\+\\+', 'dgv'), name: 'keyword.operator.increment.ts' },
          { match: new RegExp('%|\\*|\\/|-|\\+', 'dgv'), name: 'keyword.operator.arithmetic.ts' },
          {
            begin: new RegExp(
              '(?<=[_\\$\\p{Alpha}\\p{Nd}\\)\\]])\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)+(?:(\\/=)|(\\/)(?![\\/\\*])))',
              'dgv',
            ),
            end: new RegExp('(?:(\\/=)|(\\/)(?!\\*([^\\*]|(\\*[^\\/]))*\\*\\/))', 'dgv'),
            endCaptures: {
              1: { name: 'keyword.operator.assignment.compound.ts' },
              2: { name: 'keyword.operator.arithmetic.ts' },
            },
            patterns: [{ include: '#comment' }],
          },
          {
            captures: {
              1: { name: 'keyword.operator.assignment.compound.ts' },
              2: { name: 'keyword.operator.arithmetic.ts' },
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
        beginCaptures: { 1: { name: 'storage.modifier.ts' } },
        end: new RegExp(
          '(?=\\}|;|,|(?=\\n?$)|(^(?!\\p{space}*((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(?:(?:(\\?)|(!))\\p{space}*)?(=|:|;|,|(?=\\n?$)))))|(?<=\\})',
          'dgv',
        ),
        name: 'meta.field.declaration.ts',
        patterns: [
          { include: '#variable-initializer' },
          { include: '#type-annotation' },
          { include: '#string' },
          { include: '#array-literal' },
          { include: '#numeric-literal' },
          { include: '#comment' },
          {
            captures: {
              1: { name: 'meta.definition.property.ts entity.name.function.ts' },
              2: { name: 'keyword.operator.optional.ts' },
              3: { name: 'keyword.operator.definiteassignment.ts' },
            },
            match: new e(
              '(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?:(\\?)|(!))?(?=\\p{space}*\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            match: new RegExp('#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'meta.definition.property.ts variable.object.property.ts',
          },
          { match: new RegExp('\\?', 'dgv'), name: 'keyword.operator.optional.ts' },
          { match: new RegExp('!', 'dgv'), name: 'keyword.operator.definiteassignment.ts' },
        ],
      },
      'for-loop': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))for(?=((\\p{space}+|(\\p{space}*\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*))await)?\\p{space}*(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)?(\\())',
          'dgv',
        ),
        beginCaptures: { 0: { name: 'keyword.control.loop.ts' } },
        end: new RegExp('(?<=\\))', 'dgv'),
        patterns: [
          { include: '#comment' },
          { match: new RegExp('await', 'dgv'), name: 'keyword.control.loop.ts' },
          {
            begin: new RegExp('\\(', 'dgv'),
            beginCaptures: { 0: { name: 'meta.brace.round.ts' } },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.ts' } },
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
          { match: new RegExp('\\*', 'dgv'), name: 'keyword.generator.asterisk.ts' },
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
                name: 'meta.function-call.ts',
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
                name: 'meta.function-call.ts',
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
            name: 'meta.function-call.ts punctuation.accessor.optional.ts',
          },
          {
            match: new RegExp('!', 'dgv'),
            name: 'meta.function-call.ts keyword.operator.definiteassignment.ts',
          },
        ],
      },
      'function-call-target': {
        patterns: [
          { include: '#support-function-call-identifiers' },
          {
            match: new RegExp('(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'entity.name.function.ts',
          },
        ],
      },
      'function-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?(?:(async)\\p{space}+)?(function\\b)(?:\\p{space}*(\\*))?(?:(?:\\p{space}+|(?<=\\*))([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))?\\p{space}*',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.modifier.async.ts' },
          4: { name: 'storage.type.function.ts' },
          5: { name: 'keyword.generator.asterisk.ts' },
          6: { name: 'meta.definition.function.ts entity.name.function.ts' },
        },
        end: new RegExp(
          '(?=;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|(?<=\\})',
          'dgv',
        ),
        name: 'meta.function.ts',
        patterns: [{ include: '#function-name' }, { include: '#function-body' }],
      },
      'function-expression': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(async)\\p{space}+)?(function\\b)(?:\\p{space}*(\\*))?(?:(?:\\p{space}+|(?<=\\*))([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))?\\p{space}*',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'storage.modifier.async.ts' },
          2: { name: 'storage.type.function.ts' },
          3: { name: 'keyword.generator.asterisk.ts' },
          4: { name: 'meta.definition.function.ts entity.name.function.ts' },
        },
        end: new RegExp('(?=;)|(?<=\\})', 'dgv'),
        name: 'meta.function.expression.ts',
        patterns: [
          { include: '#function-name' },
          { include: '#single-line-comment-consuming-line-ending' },
          { include: '#function-body' },
        ],
      },
      'function-name': {
        match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
        name: 'meta.definition.function.ts entity.name.function.ts',
      },
      'function-parameters': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.parameters.begin.ts' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.parameters.end.ts' } },
        name: 'meta.parameters.ts',
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
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.ts' },
        ],
      },
      identifiers: {
        patterns: [
          { include: '#object-identifiers' },
          {
            captures: {
              1: { name: 'punctuation.accessor.ts' },
              2: { name: 'punctuation.accessor.optional.ts' },
              3: { name: 'entity.name.function.ts' },
            },
            match: new e(
              '(?:(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*)?([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.ts' },
              2: { name: 'punctuation.accessor.optional.ts' },
              3: { name: 'variable.other.constant.property.ts' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(#?[\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)(?![_\\$\\p{Alpha}\\p{Nd}])',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.ts' },
              2: { name: 'punctuation.accessor.optional.ts' },
              3: { name: 'variable.other.property.ts' },
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
            name: 'variable.other.constant.ts',
          },
          {
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'variable.other.readwrite.ts',
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
                  1: { name: 'keyword.control.conditional.ts' },
                  2: { name: 'meta.brace.round.ts' },
                },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.ts' } },
                patterns: [{ include: '#expression' }],
              },
              {
                begin: new RegExp(
                  '(?<=\\))\\p{space}*\\/(?![\\/\\*])(?=(?:[^\\/\\\\\\[]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
                  'dgv',
                ),
                beginCaptures: { 0: { name: 'punctuation.definition.string.begin.ts' } },
                end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
                endCaptures: {
                  1: { name: 'punctuation.definition.string.end.ts' },
                  2: { name: 'keyword.other.ts' },
                },
                name: 'string.regexp.ts',
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
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'keyword.control.import.ts' },
          4: { name: 'keyword.control.type.ts' },
        },
        end: new RegExp('(?<!^import|[^\\._\\$\\p{Alpha}\\p{Nd}]import)(?=;|(?=\\n?$)|^)', 'dgv'),
        name: 'meta.import.ts',
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
            endCaptures: { 0: { name: 'keyword.control.from.ts' } },
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
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'keyword.control.import.ts' },
              4: { name: 'keyword.control.type.ts' },
              5: { name: 'variable.other.readwrite.alias.ts' },
              6: { name: 'keyword.operator.assignment.ts' },
              7: { name: 'keyword.control.require.ts' },
              8: { name: 'meta.brace.round.ts' },
            },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.ts' } },
            name: 'meta.import-equals.external.ts',
            patterns: [{ include: '#comment' }, { include: '#string' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(import)(?:\\p{space}+(type))?\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(=)\\p{space}*(?!require\\b)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'keyword.control.import.ts' },
              4: { name: 'keyword.control.type.ts' },
              5: { name: 'variable.other.readwrite.alias.ts' },
              6: { name: 'keyword.operator.assignment.ts' },
            },
            end: new RegExp('(?=;|(?=\\n?$)|^)', 'dgv'),
            name: 'meta.import-equals.internal.ts',
            patterns: [
              { include: '#single-line-comment-consuming-line-ending' },
              { include: '#comment' },
              {
                captures: {
                  1: { name: 'entity.name.type.module.ts' },
                  2: { name: 'punctuation.accessor.ts' },
                  3: { name: 'punctuation.accessor.optional.ts' },
                },
                match: new RegExp(
                  '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))',
                  'dgv',
                ),
              },
              {
                match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
                name: 'variable.other.readwrite.ts',
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
          1: { name: 'keyword.control.with.ts' },
          2: { name: 'keyword.control.assert.ts' },
          3: { name: 'punctuation.definition.block.ts' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          {
            match: new RegExp(
              '[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object-literal.key.ts',
          },
          { match: new RegExp(':', 'dgv'), name: 'punctuation.separator.key-value.ts' },
        ],
      },
      'import-export-block': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'meta.block.ts',
        patterns: [{ include: '#import-export-clause' }],
      },
      'import-export-clause': {
        patterns: [
          { include: '#comment' },
          {
            captures: {
              1: { name: 'keyword.control.type.ts' },
              2: { name: 'keyword.control.default.ts' },
              3: { name: 'constant.language.import-export-all.ts' },
              4: { name: 'variable.other.readwrite.ts' },
              5: { name: 'string.quoted.alias.ts' },
              12: { name: 'keyword.control.as.ts' },
              13: { name: 'keyword.control.default.ts' },
              14: { name: 'variable.other.readwrite.alias.ts' },
              15: { name: 'string.quoted.alias.ts' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\btype)\\p{space}+)?(?:(\\bdefault)|(\\*)|(\\b[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))\\p{space}+(as)\\p{space}+(?:(default(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|((\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)))',
              'dgv',
            ),
          },
          { include: '#punctuation-comma' },
          { match: new RegExp('\\*', 'dgv'), name: 'constant.language.import-export-all.ts' },
          { match: new RegExp('\\b(default)\\b', 'dgv'), name: 'keyword.control.default.ts' },
          {
            captures: {
              1: { name: 'keyword.control.type.ts' },
              2: { name: 'variable.other.readwrite.alias.ts' },
              3: { name: 'string.quoted.alias.ts' },
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
          { match: new RegExp('\\bfrom\\b', 'dgv'), name: 'keyword.control.from.ts' },
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
          1: { name: 'storage.modifier.ts' },
          2: { name: 'meta.brace.square.ts' },
          3: { name: 'variable.parameter.ts' },
        },
        end: new RegExp('(\\])\\p{space}*(\\?\\p{space}*)?|(?=\\n?$)', 'dgv'),
        endCaptures: {
          1: { name: 'meta.brace.square.ts' },
          2: { name: 'keyword.operator.optional.ts' },
        },
        name: 'meta.indexer.declaration.ts',
        patterns: [{ include: '#type-annotation' }],
      },
      'indexer-mapped-type-declaration': {
        begin: new RegExp(
          '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))([\\+\\-])?(readonly)\\p{space}*)?\\p{space}*(\\[)\\p{space}*([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}+(in)\\p{space}+',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.operator.type.modifier.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'meta.brace.square.ts' },
          4: { name: 'entity.name.type.ts' },
          5: { name: 'keyword.operator.expression.in.ts' },
        },
        end: new RegExp('(\\])([\\+\\-])?\\p{space}*(\\?\\p{space}*)?|(?=\\n?$)', 'dgv'),
        endCaptures: {
          1: { name: 'meta.brace.square.ts' },
          2: { name: 'keyword.operator.type.modifier.ts' },
          3: { name: 'keyword.operator.optional.ts' },
        },
        name: 'meta.indexer.mappedtype.declaration.ts',
        patterns: [
          {
            captures: { 1: { name: 'keyword.control.as.ts' } },
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
        beginCaptures: { 1: { name: 'keyword.operator.expression.instanceof.ts' } },
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
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.modifier.ts' },
          4: { name: 'storage.type.interface.ts' },
        },
        end: new RegExp('(?<=\\})', 'dgv'),
        name: 'meta.interface.ts',
        patterns: [
          { include: '#comment' },
          { include: '#class-or-interface-heritage' },
          {
            captures: { 0: { name: 'entity.name.type.interface.ts' } },
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
      label: {
        patterns: [
          {
            begin: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(:)(?=\\p{space}*\\{)',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'entity.name.label.ts' },
              2: { name: 'punctuation.separator.label.ts' },
            },
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#decl-block' }],
          },
          {
            captures: {
              1: { name: 'entity.name.label.ts' },
              2: { name: 'punctuation.separator.label.ts' },
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
              1: { name: 'storage.modifier.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'storage.modifier.ts' },
              4: { name: 'storage.modifier.async.ts' },
              5: { name: 'storage.type.ts' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.ts',
            patterns: [{ include: '#method-declaration-name' }, { include: '#function-body' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\p{space}+)?(?:\\b(public|private|protected)\\p{space}+)?(?:\\b(abstract)\\p{space}+)?(?:\\b(async)\\p{space}+)?(?:\\p{space}*\\b(new)\\b(?!:)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))|(?:(\\*)\\p{space}*)?)(?=\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'storage.modifier.ts' },
              4: { name: 'storage.modifier.async.ts' },
              5: { name: 'keyword.operator.new.ts' },
              6: { name: 'keyword.generator.asterisk.ts' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.ts',
            patterns: [{ include: '#method-declaration-name' }, { include: '#function-body' }],
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(override)\\p{space}+)?(?:\\b(public|private|protected)\\p{space}+)?(?:\\b(abstract)\\p{space}+)?(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'storage.modifier.ts' },
              4: { name: 'storage.modifier.async.ts' },
              5: { name: 'storage.type.property.ts' },
              6: { name: 'keyword.generator.asterisk.ts' },
            },
            end: new RegExp('(?=\\}|;|,|(?=\\n?$))|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.ts',
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
            name: 'meta.definition.method.ts entity.name.function.ts',
          },
          { match: new RegExp('\\?', 'dgv'), name: 'keyword.operator.optional.ts' },
        ],
      },
      'namespace-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(namespace|module)\\p{space}+(?=[_\\$\\p{Alpha}"\'\\`])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.type.namespace.ts' },
        },
        end: new RegExp(
          '(?<=\\})|(?=;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
          'dgv',
        ),
        name: 'meta.namespace.declaration.ts',
        patterns: [
          { include: '#comment' },
          { include: '#string' },
          {
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'entity.name.type.module.ts',
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
        beginCaptures: { 1: { name: 'keyword.operator.new.ts' } },
        end: new RegExp(
          '(?<=\\))|(?=[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))new(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))function((\\p{space}+[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\\p{space}*[\\(]))))',
          'dgv',
        ),
        name: 'new.expr.ts',
        patterns: [{ include: '#expression' }],
      },
      'null-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))null(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'constant.language.null.ts',
      },
      'numeric-literal': {
        patterns: [
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.ts' } },
            match: new RegExp('\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.hex.ts',
          },
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.ts' } },
            match: new RegExp('\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.binary.ts',
          },
          {
            captures: { 1: { name: 'storage.type.numeric.bigint.ts' } },
            match: new RegExp('\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$)', 'dgv'),
            name: 'constant.numeric.octal.ts',
          },
          {
            captures: {
              0: { name: 'constant.numeric.decimal.ts' },
              1: { name: 'meta.delimiter.decimal.period.ts' },
              2: { name: 'storage.type.numeric.bigint.ts' },
              3: { name: 'meta.delimiter.decimal.period.ts' },
              4: { name: 'storage.type.numeric.bigint.ts' },
              5: { name: 'meta.delimiter.decimal.period.ts' },
              6: { name: 'storage.type.numeric.bigint.ts' },
              7: { name: 'storage.type.numeric.bigint.ts' },
              8: { name: 'meta.delimiter.decimal.period.ts' },
              9: { name: 'storage.type.numeric.bigint.ts' },
              10: { name: 'meta.delimiter.decimal.period.ts' },
              11: { name: 'storage.type.numeric.bigint.ts' },
              12: { name: 'meta.delimiter.decimal.period.ts' },
              13: { name: 'storage.type.numeric.bigint.ts' },
              14: { name: 'storage.type.numeric.bigint.ts' },
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
            name: 'constant.language.nan.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Infinity(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'constant.language.infinity.ts',
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
        endCaptures: { 0: { name: 'punctuation.destructuring.ts' } },
        patterns: [
          { include: '#string' },
          { include: '#array-literal' },
          { include: '#numeric-literal' },
          {
            match: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            name: 'variable.object.property.ts',
          },
        ],
      },
      'object-binding-pattern': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.object.ts' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.ts' } },
        patterns: [{ include: '#object-binding-element' }],
      },
      'object-binding-pattern-const': {
        begin: new RegExp('(?:(\\.\\.\\.)\\p{space}*)?(\\{)', 'dgv'),
        beginCaptures: {
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.object.ts' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.ts' } },
        patterns: [{ include: '#object-binding-element-const' }],
      },
      'object-identifiers': {
        patterns: [
          {
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*\\??\\.\\p{space}*prototype\\b(?!\\$))',
              'dgv',
            ),
            name: 'support.class.ts',
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.ts' },
              2: { name: 'punctuation.accessor.optional.ts' },
              3: { name: 'variable.other.constant.object.property.ts' },
              4: { name: 'variable.other.object.property.ts' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(?:(#?[\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)|(#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?=\\p{space}*\\??\\.\\p{space}*#?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'variable.other.constant.object.ts' },
              2: { name: 'variable.other.object.ts' },
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
        beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'meta.objectliteral.ts',
        patterns: [{ include: '#object-member' }],
      },
      'object-literal-method-declaration': {
        begin: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'storage.modifier.async.ts' },
          2: { name: 'storage.type.property.ts' },
          3: { name: 'keyword.generator.asterisk.ts' },
        },
        end: new RegExp('(?=\\}|;|,)|(?<=\\})', 'dgv'),
        name: 'meta.method.declaration.ts',
        patterns: [
          { include: '#method-declaration-name' },
          { include: '#function-body' },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:\\b(async)\\p{space}+)?(?:\\b(get|set)\\p{space}+)?(?:(\\*)\\p{space}*)?(?=\\p{space}*(((\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$))|(\\b(?<!\\$)0(?:o|O)?[0-7][0-7_]*(n)?\\b(?!\\$))|((?<!\\$)(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\B(\\.)[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*[eE][\\+\\-]?[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(\\.)(n)?\\B|\\B(\\.)[0-9][0-9_]*(n)?\\b|\\b[0-9][0-9_]*(n)?\\b(?!\\.))(?!\\$))|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`)|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])+\\]))\\p{space}*(\\??))\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?[\\(])',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'storage.modifier.async.ts' },
              2: { name: 'storage.type.property.ts' },
              3: { name: 'keyword.generator.asterisk.ts' },
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
            name: 'meta.object.member.ts meta.object-literal.key.ts',
            patterns: [{ include: '#comment' }, { include: '#array-literal' }],
          },
          {
            begin: new RegExp('(?=[\'"\\`])', 'dgv'),
            end: new RegExp(
              '(?=:)|((?<=[\'"\\`])(?=((\\p{space}*[\\(\\<\\,\\}])|(\\p{space}+(as|satisifies)\\p{space}+))))',
              'dgv',
            ),
            name: 'meta.object.member.ts meta.object-literal.key.ts',
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
            name: 'meta.object.member.ts meta.object-literal.key.ts',
            patterns: [{ include: '#comment' }, { include: '#numeric-literal' }],
          },
          {
            begin: new RegExp('(?<=[\\]\'"\\`])(?=\\p{space}*[\\(\\<])', 'dgv'),
            end: new RegExp('(?=\\}|;|,)|(?<=\\})', 'dgv'),
            name: 'meta.method.declaration.ts',
            patterns: [{ include: '#function-body' }],
          },
          {
            captures: {
              0: { name: 'meta.object-literal.key.ts' },
              1: { name: 'constant.numeric.decimal.ts' },
            },
            match: new RegExp(
              '(?![_\\$\\p{Alpha}])([\\p{Nd}]+)\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object.member.ts',
          },
          {
            captures: {
              0: { name: 'meta.object-literal.key.ts' },
              1: { name: 'entity.name.function.ts' },
            },
            match: new e(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?=(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*:(\\p{space}*/\\*([^\\*]|(\\*[^\\/]))*\\*/)*\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))',
              'dgv',
              { lazyCompile: !0 },
            ),
            name: 'meta.object.member.ts',
          },
          {
            captures: { 0: { name: 'meta.object-literal.key.ts' } },
            match: new RegExp(
              '[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*(?=(\\/\\*([^\\*]|(\\*[^\\/]))*\\*\\/\\p{space}*)*:)',
              'dgv',
            ),
            name: 'meta.object.member.ts',
          },
          {
            begin: new RegExp('\\.\\.\\.', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.spread.ts' } },
            end: new RegExp('(?=,|\\})', 'dgv'),
            name: 'meta.object.member.ts',
            patterns: [{ include: '#expression' }],
          },
          {
            captures: { 1: { name: 'variable.other.readwrite.ts' } },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?=,|\\}|(?=\\n?$)|\\/\\/|\\/\\*)',
              'dgv',
            ),
            name: 'meta.object.member.ts',
          },
          {
            captures: { 1: { name: 'keyword.control.as.ts' }, 2: { name: 'storage.modifier.ts' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as)\\p{space}+(const)(?=\\p{space}*([\\,\\}]|(?=\\n?$)))',
              'dgv',
            ),
            name: 'meta.object.member.ts',
          },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(as)|(satisfies))\\p{space}+',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.as.ts' },
              2: { name: 'keyword.control.satisfies.ts' },
            },
            end: new RegExp(
              '(?=[\\;\\)\\,\\}\\]\\:\\?\\-\\+\\>]|\\|\\||&&|!==|(?=\\n?$)|^|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(as|satisifies)\\p{space}+))',
              'dgv',
            ),
            name: 'meta.object.member.ts',
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(?=[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=)', 'dgv'),
            end: new RegExp('(?=,|\\}|(?=\\n?$)|\\/\\/|\\/\\*)', 'dgv'),
            name: 'meta.object.member.ts',
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp(':', 'dgv'),
            beginCaptures: {
              0: { name: 'meta.object-literal.key.ts punctuation.separator.key-value.ts' },
            },
            end: new RegExp('(?=,|\\})', 'dgv'),
            name: 'meta.object.member.ts',
            patterns: [
              {
                begin: new RegExp(
                  '(?<=:)\\p{space}*(async)?(?=\\p{space}*(<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)\\(\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'storage.modifier.async.ts' } },
                end: new RegExp('(?<=\\))', 'dgv'),
                patterns: [
                  { include: '#type-parameters' },
                  {
                    begin: new RegExp('\\(', 'dgv'),
                    beginCaptures: { 0: { name: 'meta.brace.round.ts' } },
                    end: new RegExp('\\)', 'dgv'),
                    endCaptures: { 0: { name: 'meta.brace.round.ts' } },
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
                  1: { name: 'storage.modifier.async.ts' },
                  2: { name: 'meta.brace.round.ts' },
                },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.ts' } },
                patterns: [{ include: '#expression-inside-possibly-arrow-parens' }],
              },
              {
                begin: new RegExp(
                  '(?<=:)\\p{space}*(async)?\\p{space}*(?=<\\p{space}*(?=\\n?$))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'storage.modifier.async.ts' } },
                end: new RegExp('(?<=>)', 'dgv'),
                patterns: [{ include: '#type-parameters' }],
              },
              {
                begin: new RegExp(
                  '(?<=>)\\p{space}*(\\()(?=\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'meta.brace.round.ts' } },
                end: new RegExp('\\)', 'dgv'),
                endCaptures: { 0: { name: 'meta.brace.round.ts' } },
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
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.array.ts' },
        },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.array.ts' } },
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
            captures: { 1: { name: 'storage.modifier.ts' } },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|protected|private|readonly)\\p{space}+(?=(override|public|protected|private|readonly)\\p{space}+)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'entity.name.function.ts variable.language.this.ts' },
              4: { name: 'entity.name.function.ts' },
              5: { name: 'keyword.operator.optional.ts' },
            },
            match: new e(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(override|public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*(\\??)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'variable.parameter.ts variable.language.this.ts' },
              4: { name: 'variable.parameter.ts' },
              5: { name: 'keyword.operator.optional.ts' },
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
          1: { name: 'keyword.operator.rest.ts' },
          2: { name: 'punctuation.definition.binding-pattern.object.ts' },
        },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.binding-pattern.object.ts' } },
        patterns: [{ include: '#parameter-object-binding-element' }],
      },
      'parameter-type-annotation': {
        patterns: [
          {
            begin: new RegExp('(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
            end: new RegExp('(?=[\\,\\)])|(?==[^\\>])', 'dgv'),
            name: 'meta.type.annotation.ts',
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'paren-expression': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'meta.brace.round.ts' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.round.ts' } },
        patterns: [{ include: '#expression' }],
      },
      'paren-expression-possibly-arrow': {
        patterns: [
          {
            begin: new RegExp(
              '(?<=[\\(\\=\\,])\\p{space}*(async)?(?=\\p{space}*((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?\\(\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.ts' } },
            end: new RegExp('(?<=\\))', 'dgv'),
            patterns: [{ include: '#paren-expression-possibly-arrow-with-typeparameters' }],
          },
          {
            begin: new RegExp(
              '(?<=[\\(\\=\\,]|=>|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return)\\p{space}*(async)?(?=\\p{space}*((((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*))?\\()|(<)|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)))\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.async.ts' } },
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
            beginCaptures: { 0: { name: 'meta.brace.round.ts' } },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.ts' } },
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
            name: 'meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts',
          },
        },
        contentName: 'meta.arrow.ts meta.return.type.arrow.ts',
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
        name: 'storage.type.property.ts',
      },
      'punctuation-accessor': {
        captures: {
          1: { name: 'punctuation.accessor.ts' },
          2: { name: 'punctuation.accessor.optional.ts' },
        },
        match: new RegExp('(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))', 'dgv'),
      },
      'punctuation-comma': {
        match: new RegExp(',', 'dgv'),
        name: 'punctuation.separator.comma.ts',
      },
      'punctuation-semicolon': {
        match: new RegExp(';', 'dgv'),
        name: 'punctuation.terminator.statement.ts',
      },
      'qstring-double': {
        begin: new RegExp('"', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.ts' } },
        end: new RegExp('(")|([^\\\\\\n](?=\\n?$))', 'dgv'),
        endCaptures: {
          1: { name: 'punctuation.definition.string.end.ts' },
          2: { name: 'invalid.illegal.newline.ts' },
        },
        name: 'string.quoted.double.ts',
        patterns: [{ include: '#string-character-escape' }],
      },
      'qstring-single': {
        begin: new RegExp("'", 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.string.begin.ts' } },
        end: new RegExp("(')|([^\\\\\\n](?=\\n?$))", 'dgv'),
        endCaptures: {
          1: { name: 'punctuation.definition.string.end.ts' },
          2: { name: 'invalid.illegal.newline.ts' },
        },
        name: 'string.quoted.single.ts',
        patterns: [{ include: '#string-character-escape' }],
      },
      regex: {
        patterns: [
          {
            begin: new RegExp(
              '(?<!\\+\\+|--|\\})(?<=[\\=\\(\\:\\,\\[\\?\\+\\!]|^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^case|[^\\._\\$\\p{Alpha}\\p{Nd}]case|=>|&&|\\|\\||\\*\\/)\\p{space}*(\\/)(?![\\/\\*])(?=(?:[^\\/\\\\\\[\\(\\)]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])+\\]|\\(([^\\)\\\\]|\\\\[^\\n])+\\))+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'punctuation.definition.string.begin.ts' } },
            end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
            endCaptures: {
              1: { name: 'punctuation.definition.string.end.ts' },
              2: { name: 'keyword.other.ts' },
            },
            name: 'string.regexp.ts',
            patterns: [{ include: '#regexp' }],
          },
          {
            begin: new RegExp(
              '((?<![_\\$\\p{Alpha}\\p{Nd}\\)\\]]|\\+\\+|--|\\}|\\*\\/)|((?<=^return|[^\\._\\$\\p{Alpha}\\p{Nd}]return|^case|[^\\._\\$\\p{Alpha}\\p{Nd}]case))\\p{space}*)\\/(?![\\/\\*])(?=(?:[^\\/\\\\\\[]|\\\\[^\\n]|\\[([^\\]\\\\]|\\\\[^\\n])*\\])+\\/([dgimsuvy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\p{space}*[a-zA-Z0-9_\\$]))',
              'dgv',
            ),
            beginCaptures: { 0: { name: 'punctuation.definition.string.begin.ts' } },
            end: new RegExp('(\\/)([dgimsuvy]*)', 'dgv'),
            endCaptures: {
              1: { name: 'punctuation.definition.string.end.ts' },
              2: { name: 'keyword.other.ts' },
            },
            name: 'string.regexp.ts',
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
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
            end: new RegExp('(?<![\\:\\|\\&])(?=(?=\\n?$)|^|[\\{\\}\\;\\,]|\\/\\/)', 'dgv'),
            name: 'meta.return.type.ts',
            patterns: [{ include: '#return-type-core' }],
          },
          {
            begin: new RegExp('(?<=\\))\\p{space}*(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])((?=[\\{\\}\\;\\,]|\\/\\/|^\\p{space}*(?=\\n?$))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.return.type.ts',
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
        captures: { 1: { name: 'punctuation.definition.comment.ts' } },
        match: new RegExp('^(#!)[^\\n]*(?=(?=\\n?$))', 'dgv'),
        name: 'comment.line.shebang.ts',
      },
      'single-line-comment-consuming-line-ending': {
        begin: new RegExp(
          '(^[ \\t]+)?((\\/\\/)(?:\\p{space}*((@)internal)(?=\\p{space}|(?=\\n?$)))?)',
          'dgv',
        ),
        beginCaptures: {
          1: { name: 'punctuation.whitespace.comment.leading.ts' },
          2: { name: 'comment.line.double-slash.ts' },
          3: { name: 'punctuation.definition.comment.ts' },
          4: { name: 'storage.type.internaldeclaration.ts' },
          5: { name: 'punctuation.decorator.internaldeclaration.ts' },
        },
        contentName: 'comment.line.double-slash.ts',
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
        name: 'constant.character.escape.ts',
      },
      'super-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))super\\b(?!\\$)',
          'dgv',
        ),
        name: 'variable.language.super.ts',
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
            name: 'keyword.operator.expression.import.ts',
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
            name: 'variable.language.arguments.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(Promise)\\b(?!\\$)',
              'dgv',
            ),
            name: 'support.class.promise.ts',
          },
          {
            captures: {
              1: { name: 'keyword.control.import.ts' },
              2: { name: 'punctuation.accessor.ts' },
              3: { name: 'punctuation.accessor.optional.ts' },
              4: { name: 'support.variable.property.importmeta.ts' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(import)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(meta)\\b(?!\\$)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'keyword.operator.new.ts' },
              2: { name: 'punctuation.accessor.ts' },
              3: { name: 'punctuation.accessor.optional.ts' },
              4: { name: 'support.variable.property.target.ts' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(new)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(target)\\b(?!\\$)',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'punctuation.accessor.ts' },
              2: { name: 'punctuation.accessor.optional.ts' },
              3: { name: 'support.variable.property.ts' },
              4: { name: 'support.constant.ts' },
            },
            match: new RegExp(
              '(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))\\p{space}*(?:(constructor|length|prototype|__proto__)\\b(?!\\$|\\p{space}*(<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\b(?!\\$))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'support.type.object.module.ts' },
              2: { name: 'support.type.object.module.ts' },
              3: { name: 'punctuation.accessor.ts' },
              4: { name: 'punctuation.accessor.optional.ts' },
              5: { name: 'support.type.object.module.ts' },
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
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'switch-statement.expr.ts',
        patterns: [
          { include: '#comment' },
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(switch)\\p{space}*(\\()',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.control.switch.ts' },
              2: { name: 'meta.brace.round.ts' },
            },
            end: new RegExp('\\)', 'dgv'),
            endCaptures: { 0: { name: 'meta.brace.round.ts' } },
            name: 'switch-expression.expr.ts',
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp('\\{', 'dgv'),
            beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
            end: new RegExp('(?=\\})', 'dgv'),
            name: 'switch-block.expr.ts',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(case|default(?=:))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
                  'dgv',
                ),
                beginCaptures: { 1: { name: 'keyword.control.switch.ts' } },
                end: new RegExp('(?=:)', 'dgv'),
                name: 'case-clause.expr.ts',
                patterns: [{ include: '#expression' }],
              },
              {
                begin: new RegExp('(:)\\p{space}*(\\{)', 'dgv'),
                beginCaptures: {
                  1: {
                    name: 'case-clause.expr.ts punctuation.definition.section.case-statement.ts',
                  },
                  2: { name: 'meta.block.ts punctuation.definition.block.ts' },
                },
                contentName: 'meta.block.ts',
                end: new RegExp('\\}', 'dgv'),
                endCaptures: { 0: { name: 'meta.block.ts punctuation.definition.block.ts' } },
                patterns: [{ include: '#statements' }],
              },
              {
                captures: {
                  0: {
                    name: 'case-clause.expr.ts punctuation.definition.section.case-statement.ts',
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
              1: { name: 'entity.name.function.tagged-template.ts' },
              2: { name: 'string.template.ts punctuation.definition.string.template.begin.ts' },
            },
            contentName: 'string.template.ts',
            end: new RegExp('`', 'dgv'),
            endCaptures: {
              0: { name: 'string.template.ts punctuation.definition.string.template.end.ts' },
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
                    name: 'entity.name.function.tagged-template.ts',
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
            beginCaptures: { 1: { name: 'entity.name.function.tagged-template.ts' } },
            end: new RegExp('(?=`)', 'dgv'),
            patterns: [{ include: '#type-arguments' }],
          },
        ],
      },
      'template-substitution-element': {
        begin: new RegExp('\\$\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.template-expression.begin.ts' } },
        contentName: 'meta.embedded.line.ts',
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.template-expression.end.ts' } },
        name: 'meta.template.expression.ts',
        patterns: [{ include: '#expression' }],
      },
      'template-type': {
        patterns: [
          { include: '#template-call' },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)?(`)', 'dgv'),
            beginCaptures: {
              1: { name: 'entity.name.function.tagged-template.ts' },
              2: { name: 'string.template.ts punctuation.definition.string.template.begin.ts' },
            },
            contentName: 'string.template.ts',
            end: new RegExp('`', 'dgv'),
            endCaptures: {
              0: { name: 'string.template.ts punctuation.definition.string.template.end.ts' },
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
        beginCaptures: { 0: { name: 'punctuation.definition.template-expression.begin.ts' } },
        contentName: 'meta.embedded.line.ts',
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.template-expression.end.ts' } },
        name: 'meta.template.expression.ts',
        patterns: [{ include: '#type' }],
      },
      'ternary-expression': {
        begin: new RegExp('(?!\\?\\.\\p{space}*[^\\p{Nd}])(\\?)(?!\\?)', 'dgv'),
        beginCaptures: { 1: { name: 'keyword.operator.ternary.ts' } },
        end: new RegExp('\\p{space}*(:)', 'dgv'),
        endCaptures: { 1: { name: 'keyword.operator.ternary.ts' } },
        patterns: [{ include: '#expression' }],
      },
      'this-literal': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))this\\b(?!\\$)',
          'dgv',
        ),
        name: 'variable.language.this.ts',
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
            captures: { 1: { name: 'storage.modifier.ts' } },
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
          1: { name: 'keyword.control.export.ts' },
          2: { name: 'storage.modifier.ts' },
          3: { name: 'storage.type.type.ts' },
          4: { name: 'entity.name.type.alias.ts' },
        },
        end: new RegExp(
          '(?=\\}|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
          'dgv',
        ),
        name: 'meta.type.declaration.ts',
        patterns: [
          { include: '#comment' },
          { include: '#type-parameters' },
          {
            begin: new RegExp(
              '(=)\\p{space}*(intrinsic)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'keyword.operator.assignment.ts' },
              2: { name: 'keyword.control.intrinsic.ts' },
            },
            end: new RegExp(
              '(?=\\}|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)',
              'dgv',
            ),
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(=)\\p{space}*', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.assignment.ts' } },
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
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])(?!\\p{space}*[\\|\\&]\\p{space}+)((?=^|[\\,\\)\\;\\}\\]]|\\/\\/)|(?==[^\\>])|((?<=[\\}\\>\\]\\)]|[_\\$\\p{Alpha}])\\p{space}*(?=\\{)))',
              'dgv',
            ),
            name: 'meta.type.annotation.ts',
            patterns: [{ include: '#type' }],
          },
          {
            begin: new RegExp('(:)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.type.annotation.ts' } },
            end: new RegExp(
              '(?<![\\:\\|\\&])((?=[\\,\\)\\;\\}\\]]|\\/\\/)|(?==[^\\>])|(?=^\\p{space}*(?=\\n?$))|((?<=[\\}\\>\\]\\)]|[_\\$\\p{Alpha}])\\p{space}*(?=\\{)))',
              'dgv',
            ),
            name: 'meta.type.annotation.ts',
            patterns: [{ include: '#type' }],
          },
        ],
      },
      'type-arguments': {
        begin: new RegExp('<', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.typeparameters.begin.ts' } },
        end: new RegExp('>', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.typeparameters.end.ts' } },
        name: 'meta.type.parameters.ts',
        patterns: [{ include: '#type-arguments-body' }],
      },
      'type-arguments-body': {
        patterns: [
          {
            captures: { 0: { name: 'keyword.operator.type.ts' } },
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
        name: 'support.type.builtin.ts',
      },
      'type-conditional': {
        patterns: [
          {
            begin: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends)\\p{space}+',
              'dgv',
            ),
            beginCaptures: { 1: { name: 'storage.modifier.ts' } },
            end: new RegExp('(?<=:)', 'dgv'),
            patterns: [
              {
                begin: new RegExp('\\?', 'dgv'),
                beginCaptures: { 0: { name: 'keyword.operator.ternary.ts' } },
                end: new RegExp(':', 'dgv'),
                endCaptures: { 0: { name: 'keyword.operator.ternary.ts' } },
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
              1: { name: 'meta.type.constructor.ts storage.modifier.ts' },
              2: { name: 'meta.type.constructor.ts keyword.control.new.ts' },
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
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.control.new.ts' },
            },
            end: new RegExp('(?<=\\))', 'dgv'),
            name: 'meta.type.constructor.ts',
            patterns: [{ include: '#function-parameters' }],
          },
          {
            begin: new RegExp(
              '((?=[\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>))))))',
              'dgv',
            ),
            end: new RegExp('(?<=\\))', 'dgv'),
            name: 'meta.type.function.ts',
            patterns: [{ include: '#function-parameters' }],
          },
        ],
      },
      'type-function-return-type': {
        patterns: [
          {
            begin: new RegExp('(=>)(?=\\p{space}*\\P{space})', 'dgv'),
            beginCaptures: { 1: { name: 'storage.type.function.arrow.ts' } },
            end: new RegExp(
              '(?<!=>)(?<![\\|\\&])(?=[\\,\\]\\)\\{\\}\\=\\;\\>\\:\\?]|\\/\\/|(?=\\n?$))',
              'dgv',
            ),
            name: 'meta.type.function.return.ts',
            patterns: [{ include: '#type-function-return-type-core' }],
          },
          {
            begin: new RegExp('=>', 'dgv'),
            beginCaptures: { 0: { name: 'storage.type.function.arrow.ts' } },
            end: new RegExp(
              '(?<!=>)(?<![\\|\\&])((?=[\\,\\]\\)\\{\\}\\=\\;\\:\\?\\>]|\\/\\/|^\\p{space}*(?=\\n?$))|((?<=\\P{space})(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.type.function.return.ts',
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
              1: { name: 'keyword.operator.expression.infer.ts' },
              2: { name: 'entity.name.type.ts' },
              3: { name: 'keyword.operator.expression.extends.ts' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(infer)\\p{space}+([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))(?:\\p{space}+(extends)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))?',
              'dgv',
            ),
            name: 'meta.type.infer.ts',
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
              1: { name: 'entity.name.type.module.ts' },
              2: { name: 'punctuation.accessor.ts' },
              3: { name: 'punctuation.accessor.optional.ts' },
              4: { name: 'meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts' },
            },
            contentName: 'meta.type.parameters.ts',
            end: new RegExp('(>)', 'dgv'),
            endCaptures: {
              1: { name: 'meta.type.parameters.ts punctuation.definition.typeparameters.end.ts' },
            },
            patterns: [{ include: '#type-arguments-body' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(<)', 'dgv'),
            beginCaptures: {
              1: { name: 'entity.name.type.ts' },
              2: { name: 'meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts' },
            },
            contentName: 'meta.type.parameters.ts',
            end: new RegExp('(>)', 'dgv'),
            endCaptures: {
              1: { name: 'meta.type.parameters.ts punctuation.definition.typeparameters.end.ts' },
            },
            patterns: [{ include: '#type-arguments-body' }],
          },
          {
            captures: {
              1: { name: 'entity.name.type.module.ts' },
              2: { name: 'punctuation.accessor.ts' },
              3: { name: 'punctuation.accessor.optional.ts' },
            },
            match: new RegExp(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)\\p{space}*(?:(\\.)|(\\?\\.(?!\\p{space}*[\\p{Nd}])))',
              'dgv',
            ),
          },
          {
            match: new RegExp('[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*', 'dgv'),
            name: 'entity.name.type.ts',
          },
        ],
      },
      'type-object': {
        begin: new RegExp('\\{', 'dgv'),
        beginCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        end: new RegExp('\\}', 'dgv'),
        endCaptures: { 0: { name: 'punctuation.definition.block.ts' } },
        name: 'meta.object.type.ts',
        patterns: [
          { include: '#comment' },
          { include: '#method-declaration' },
          { include: '#indexer-declaration' },
          { include: '#indexer-mapped-type-declaration' },
          { include: '#field-declaration' },
          { include: '#type-annotation' },
          {
            begin: new RegExp('\\.\\.\\.', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.spread.ts' } },
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
            beginCaptures: { 0: { name: 'keyword.operator.type.ts' } },
            end: new RegExp('(?<=\\})', 'dgv'),
            patterns: [{ include: '#type-object' }],
          },
          {
            begin: new RegExp('[\\&\\|]', 'dgv'),
            beginCaptures: { 0: { name: 'keyword.operator.type.ts' } },
            end: new RegExp('(?=\\P{space})', 'dgv'),
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))keyof(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.keyof.ts',
          },
          { match: new RegExp('(\\?|:)', 'dgv'), name: 'keyword.operator.ternary.ts' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))import(?=\\p{space}*\\()',
              'dgv',
            ),
            name: 'keyword.operator.expression.import.ts',
          },
        ],
      },
      'type-parameters': {
        begin: new RegExp('(<)', 'dgv'),
        beginCaptures: { 1: { name: 'punctuation.definition.typeparameters.begin.ts' } },
        end: new RegExp('(>)', 'dgv'),
        endCaptures: { 1: { name: 'punctuation.definition.typeparameters.end.ts' } },
        name: 'meta.type.parameters.ts',
        patterns: [
          { include: '#comment' },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'storage.modifier.ts',
          },
          { include: '#type' },
          { include: '#punctuation-comma' },
          { match: new RegExp('(=)(?!>)', 'dgv'), name: 'keyword.operator.assignment.ts' },
        ],
      },
      'type-paren-or-function-parameters': {
        begin: new RegExp('\\(', 'dgv'),
        beginCaptures: { 0: { name: 'meta.brace.round.ts' } },
        end: new RegExp('\\)', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.round.ts' } },
        name: 'meta.type.paren.cover.ts',
        patterns: [
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'entity.name.function.ts variable.language.this.ts' },
              4: { name: 'entity.name.function.ts' },
              5: { name: 'keyword.operator.optional.ts' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}*(\\??)(?=\\p{space}*(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'storage.modifier.ts' },
              2: { name: 'keyword.operator.rest.ts' },
              3: { name: 'variable.parameter.ts variable.language.this.ts' },
              4: { name: 'variable.parameter.ts' },
              5: { name: 'keyword.operator.optional.ts' },
            },
            match: new RegExp(
              '(?:(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(public|private|protected|readonly)\\p{space}+)?(?:(\\.\\.\\.)\\p{space}*)?(?<!=|:)(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}*(\\??)(?=:)',
              'dgv',
            ),
          },
          { include: '#type-annotation' },
          { match: new RegExp(',', 'dgv'), name: 'punctuation.separator.parameter.ts' },
          { include: '#type' },
        ],
      },
      'type-predicate-operator': {
        patterns: [
          {
            captures: {
              1: { name: 'keyword.operator.type.asserts.ts' },
              2: { name: 'variable.parameter.ts variable.language.this.ts' },
              3: { name: 'variable.parameter.ts' },
              4: { name: 'keyword.operator.expression.is.ts' },
            },
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(asserts)\\p{space}+)?(?!asserts)(?:(this)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*))\\p{space}(is)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
          },
          {
            captures: {
              1: { name: 'keyword.operator.type.asserts.ts' },
              2: { name: 'variable.parameter.ts variable.language.this.ts' },
              3: { name: 'variable.parameter.ts' },
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
            name: 'keyword.operator.type.asserts.ts',
          },
          {
            match: new RegExp(
              '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))is(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
              'dgv',
            ),
            name: 'keyword.operator.expression.is.ts',
          },
        ],
      },
      'type-primitive': {
        match: new RegExp(
          '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))',
          'dgv',
        ),
        name: 'support.type.primitive.ts',
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
        beginCaptures: { 0: { name: 'meta.brace.square.ts' } },
        end: new RegExp('\\]', 'dgv'),
        endCaptures: { 0: { name: 'meta.brace.square.ts' } },
        name: 'meta.type.tuple.ts',
        patterns: [
          { match: new RegExp('\\.\\.\\.', 'dgv'), name: 'keyword.operator.rest.ts' },
          {
            captures: {
              1: { name: 'entity.name.label.ts' },
              2: { name: 'keyword.operator.optional.ts' },
              3: { name: 'punctuation.separator.label.ts' },
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
        beginCaptures: { 0: { name: 'keyword.operator.expression.typeof.ts' } },
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
        name: 'constant.language.undefined.ts',
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
            name: 'meta.var.expr.ts',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(var|let)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.ts' },
                  2: { name: 'storage.modifier.ts' },
                  3: { name: 'storage.type.ts' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#destructuring-variable' },
              { include: '#var-single-variable' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*(?=(?=\\n?$)|\\/\\/)', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.ts' } },
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
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'storage.type.ts' },
            },
            end: new RegExp(
              '(?!(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(const(?!\\p{space}+enum\\b))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))((?=^|;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|((?<!^const|[^\\._\\$\\p{Alpha}\\p{Nd}]const)(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.var.expr.ts',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(const(?!\\p{space}+enum\\b))(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.ts' },
                  2: { name: 'storage.modifier.ts' },
                  3: { name: 'storage.type.ts' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#destructuring-const' },
              { include: '#var-single-const' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*(?=(?=\\n?$)|\\/\\/)', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.ts' } },
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
              1: { name: 'keyword.control.export.ts' },
              2: { name: 'storage.modifier.ts' },
              3: { name: 'storage.type.ts' },
            },
            end: new RegExp(
              '(?!(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))((?=;|\\}|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b)|((?<!^using|[^\\._\\$\\p{Alpha}\\p{Nd}]using|^await\\p{space}+using|[^\\._\\$\\p{Alpha}\\p{Nd}]await\\p{space}+using)(?=\\p{space}*(?=\\n?$))))',
              'dgv',
            ),
            name: 'meta.var.expr.ts',
            patterns: [
              {
                begin: new RegExp(
                  '(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(?:(\\bexport)\\p{space}+)?(?:(\\bdeclare)\\p{space}+)?\\b(\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b)(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.))\\p{space}*',
                  'dgv',
                ),
                beginCaptures: {
                  1: { name: 'keyword.control.export.ts' },
                  2: { name: 'storage.modifier.ts' },
                  3: { name: 'storage.type.ts' },
                },
                end: new RegExp('(?=\\P{space})', 'dgv'),
              },
              { include: '#var-single-const' },
              { include: '#variable-initializer' },
              { include: '#comment' },
              {
                begin: new RegExp('(,)\\p{space}*((?!\\P{space})|(?=\\/\\/))', 'dgv'),
                beginCaptures: { 1: { name: 'punctuation.separator.comma.ts' } },
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
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
            beginCaptures: {
              1: {
                name: 'meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts',
              },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.ts',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)', 'dgv'),
            beginCaptures: {
              1: { name: 'meta.definition.variable.ts variable.other.constant.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.ts',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
        ],
      },
      'var-single-variable': {
        patterns: [
          {
            begin: new e(
              '([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(!)?(?=\\p{space}*(=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>)))))|(:\\p{space}*((<)|([\\(]\\p{space}*(([\\)])|(\\.\\.\\.)|([_\\$\\p{Alpha}\\p{Nd}]+\\p{space}*(([\\:\\,\\?\\=])|([\\)]\\p{space}*=>)))))))|(:\\p{space}*(?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))Function(?![_\\$\\p{Alpha}\\p{Nd}])(?:(?=\\.\\.\\.)|(?!\\.)))|(:\\p{space}*((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))))))|(:\\p{space}*(=>|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(<[^\\<\\>]*>)|[^\\<\\>\\(\\)\\,\\=])+=\\p{space}*(((async\\p{space}+)?((function\\p{space}*[\\(\\<\\*])|(function\\p{space}+)|([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*=>)))|((async\\p{space}*)?(((<\\p{space}*(?=\\n?$))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*((([\\{\\[]\\p{space}*)?(?=\\n?$))|((\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})\\p{space}*((:\\p{space}*\\{?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*)))|((\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])\\p{space}*((:\\p{space}*\\[?(?=\\n?$))|((\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+\\p{space}*)?=\\p{space}*))))))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?[\\(]\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([\\)]\\p{space}*:)|((\\.\\.\\.\\p{space}*)?[_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*\\p{space}*:)))|((<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<]|<\\p{space}*(((const\\p{space}+)?[_\\$\\p{Alpha}])|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\]))([^\\=\\<\\>]|=[^\\<])*>)*>)*>\\p{space}*)?\\(\\p{space}*(/\\*([^\\*]|(\\*[^\\/]))*\\*/\\p{space}*)*(([_\\$\\p{Alpha}]|(\\{([^\\{\\}]|(\\{([^\\{\\}]|\\{[^\\{\\}]*\\})*\\}))*\\})|(\\[([^\\[\\]]|(\\[([^\\[\\]]|\\[[^\\[\\]]*\\])*\\]))*\\])|(\\.\\.\\.\\p{space}*[_\\$\\p{Alpha}]))([^\\(\\)\'"\\`]|(\\(([^\\(\\)]|(\\(([^\\(\\)]|\\([^\\(\\)]*\\))*\\)))*\\))|(\'([^\'\\\\]|\\\\[^\\n])*\')|("([^"\\\\]|\\\\[^\\n])*")|(`([^\\`\\\\]|\\\\[^\\n])*`))*)?\\)(\\p{space}*:\\p{space}*([^\\<\\>\\(\\)\\{\\}]|<([^\\<\\>]|<([^\\<\\>]|<[^\\<\\>]+>)+>)+>|\\([^\\(\\)]+\\)|\\{[^\\{\\}]+\\})+)?\\p{space}*=>))))))',
              'dgv',
              { lazyCompile: !0 },
            ),
            beginCaptures: {
              1: { name: 'meta.definition.variable.ts entity.name.function.ts' },
              2: { name: 'keyword.operator.definiteassignment.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.ts',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp(
              '([\\p{Upper}][_\\$\\p{Nd}\\p{Upper}]*)(?![_\\$\\p{Alpha}\\p{Nd}])(!)?',
              'dgv',
            ),
            beginCaptures: {
              1: { name: 'meta.definition.variable.ts variable.other.constant.ts' },
              2: { name: 'keyword.operator.definiteassignment.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.ts',
            patterns: [{ include: '#var-single-variable-type-annotation' }],
          },
          {
            begin: new RegExp('([_\\$\\p{Alpha}][_\\$\\p{Alpha}\\p{Nd}]*)(!)?', 'dgv'),
            beginCaptures: {
              1: { name: 'meta.definition.variable.ts variable.other.readwrite.ts' },
              2: { name: 'keyword.operator.definiteassignment.ts' },
            },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\;\\,\\=\\}]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+)|(;|^\\p{space}*(?=\\n?$)|^\\p{space}*(?:abstract|async|\\bawait\\p{space}+\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\busing(?=\\p{space}+(?!in\\b|of\\b(?!\\p{space}*(?:of\\b|=)))[_\\$\\p{Alpha}])\\b|var|while)\\b))',
              'dgv',
            ),
            name: 'meta.var-single-variable.expr.ts',
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
            beginCaptures: { 1: { name: 'keyword.operator.assignment.ts' } },
            end: new RegExp(
              '(?=(?=\\n?$)|^|[\\,\\)\\;\\}\\]]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
          {
            begin: new RegExp('(?<!=|!)(=)(?!=)', 'dgv'),
            beginCaptures: { 1: { name: 'keyword.operator.assignment.ts' } },
            end: new RegExp(
              '(?=[\\,\\)\\;\\}\\]]|((?<![_\\$\\p{Alpha}\\p{Nd}])(?:(?<=\\.\\.\\.)|(?<!\\.))(of|in)\\p{space}+))|(?=^\\p{space}*(?=\\n?$))|(?<![\\|\\&\\+\\-\\*\\/])(?<=\\P{space})(?<!=)(?=\\p{space}*(?=\\n?$))',
              'dgv',
            ),
            patterns: [{ include: '#expression' }],
          },
        ],
      },
    },
    scopeName: 'source.ts',
    embeddedLangs: void 0,
    aliases: ['ts'],
  }),
  t = [p];
export { t as default };
