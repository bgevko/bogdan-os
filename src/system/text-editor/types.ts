// Types for the text editor

type NodeString =
  | 'document'
  | 'paragraph'
  | 'text'
  | 'link'
  | 'heading'
  | 'list'
  | 'list_item'
  | 'blockquote'
  | 'table'
  | 'table_row'
  | 'table_cell'
  | 'horizontal_rule'
  | 'inline_code'
  | 'image'
  | 'embed';

/**
 * The root document node. Contains all other nodes.
 */
interface BaseNode {
  node: NodeString;
  id: string;
  className?: string;
  style?: React.CSSProperties;
  children?: AnyNode[];
}

/**
 * The root document node. Contains all other nodes.
 */
interface DocumentNode extends BaseNode {
  node: 'document';
  children: BlockNode[];
}

/**
 * Block-level nodes (e.g., paragraphs, headings, lists).
 */
type BlockNode =
  | ParagraphNode
  | HeadingNode
  | ListNode
  | BlockquoteNode
  | TableNode
  | HorizontalRuleNode;

/**
 * Inline-level nodes (e.g., text, links, inline code).
 */
type InlineNode = TextNode | LinkNode | InlineCodeNode;

/**
 * Void nodes (e.g., images, embeds).
 */
type VoidNode = ImageNode | EmbedNode | HorizontalRuleNode;

/**
 * Paragraph node.
 */
interface ParagraphNode extends BaseNode {
  node: 'paragraph';
  children: InlineNode[];
}

/**
 * Heading node.
 */
interface HeadingNode extends BaseNode {
  node: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: InlineNode[];
}

/**
 * List node.
 */
interface ListNode extends BaseNode {
  node: 'list';
  type: 'ordered' | 'unordered';
  children: ListItemNode[];
}

/**
 * List item node.
 */
interface ListItemNode extends BaseNode {
  node: 'list_item';
  children: InlineNode[];
}

/**
 * Blockquote node.
 */
interface BlockquoteNode extends BaseNode {
  node: 'blockquote';
  children: BlockNode[];
}

/**
 * Table node.
 */
interface TableNode extends BaseNode {
  node: 'table';
  children: TableRowNode[];
}

/**
 * Table row node.
 */
interface TableRowNode extends BaseNode {
  node: 'table_row';
  children: TableCellNode[];
}

/**
 * Table cell node.
 */
interface TableCellNode extends BaseNode {
  node: 'table_cell';
  children: InlineNode[];
}

/**
 * Horizontal rule node.
 */
interface HorizontalRuleNode extends BaseNode {
  node: 'horizontal_rule';
}

/**
 * Text node.
 */
interface TextNode extends BaseNode {
  node: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

/**
 * Link node.
 */
interface LinkNode extends BaseNode {
  node: 'link';
  href: string;
  children: TextNode[];
}

/**
 * Inline code node.
 */
interface InlineCodeNode extends BaseNode {
  node: 'inline_code';
  text: string;
}

/**
 * Image node.
 */
interface ImageNode extends BaseNode {
  node: 'image';
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

/**
 * Embed node.
 */
interface EmbedNode extends BaseNode {
  node: 'embed';
  src: string;
  title?: string;
  width?: number;
  height?: number;
}

/**
 * Union type for any possible node.
 */
type AnyNode =
  | DocumentNode
  | BlockNode
  | InlineNode
  | VoidNode
  | ParagraphNode
  | HeadingNode
  | ListNode
  | ListItemNode
  | BlockquoteNode
  | TableNode
  | TableRowNode
  | TableCellNode
  | HorizontalRuleNode
  | TextNode
  | LinkNode
  | InlineCodeNode
  | ImageNode
  | EmbedNode;

export type {
  BaseNode,
  DocumentNode,
  BlockNode,
  InlineNode,
  VoidNode,
  ParagraphNode,
  HeadingNode,
  ListNode,
  ListItemNode,
  BlockquoteNode,
  TableNode,
  TableRowNode,
  TableCellNode,
  HorizontalRuleNode,
  TextNode,
  LinkNode,
  InlineCodeNode,
  ImageNode,
  EmbedNode,
  AnyNode,
};
