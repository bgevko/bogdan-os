/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import React from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { type DocumentNode, type AnyNode } from '@/system/text-editor/types';

const DEBUG = true;

export interface State {
  documentNode: DocumentNode;
  selection: {
    nodeId: string | null;
    startOffset?: number;
    endOffset?: number;
  };
}

interface Actions {
  // Getters
  getNode: (nodeId: string) => AnyNode | null;

  // Node operations
  insertNode: (parentId: string, newNode: AnyNode, index?: number) => boolean;
  deleteNode: (nodeId: string) => boolean;
  updateNode: (nodeId: string, updatedNode: Partial<AnyNode>) => void;
  traverseNodes: (node: AnyNode, callback: (_node: AnyNode) => void, order?: string) => void;

  // Selection operations
  // setSelection: (nodeId: string | null, startOffset?: number, endOffset?: number) => void;
  // clearSelection: () => void;

  // Document operations
  // insertText: (text: string) => void;
  // deleteText: () => void;
  // insertParagraph: (index?: number) => void;
  // insertHeading: (level: number, index?: number) => void;

  renderContent: (node: AnyNode) => React.ReactElement;
  clearDocument: () => void;
}

interface EditorState extends State, Actions {}

const useEditorStore = create<EditorState>()(
  immer((set, get) => ({
    documentNode: {
      node: 'document',
      id: 'root',
      children: [],
    },
    selection: {
      nodeId: null,
    },

    /*
     ********************************
     *           Get Node           *
     ********************************
     */
    getNode: (nodeId) => {
      const { documentNode } = get();
      return findNode(documentNode, nodeId);
    },

    /*
     ********************************
     *          Insert Node         *
     ********************************
     */
    insertNode: (parentId, newNode, index) => {
      let didInsert = false;
      set((state) => {
        const doc = state.documentNode;
        const parent = findNode(doc, parentId);
        if (!parent) {
          if (DEBUG) {
            console.warn(`EditorStore:InsertNode: Parent node with id ${parentId} not found`);
          }
          return;
        }
        if (!('children' in parent)) {
          if (DEBUG) {
            console.warn(
              `EditorStore:InsertNode: Parent node with id ${parentId} does not support children`,
            );
          }
          return;
        }
        const children: AnyNode[] = parent.children!;
        const insertIndex = index ?? children.length;
        children.splice(insertIndex, 0, newNode);
        didInsert = true;
      });
      return didInsert;
    },

    /*
     ********************************
     *          Delete Node         *
     ********************************
     */
    deleteNode: (nodeId) => {
      let didDelete = false;
      set((state) => {
        const doc = state.documentNode;
        const parent = findParentNode(doc, nodeId);
        if (!parent) {
          if (DEBUG) {
            console.warn(`EditorStore:DeleteNode: Node with id ${nodeId} not found`);
          }
          return;
        }
        const children: AnyNode[] = parent.children!;
        parent.children = children.filter((child) => child.id !== nodeId);
        didDelete = true;
      });
      return didDelete;
    },

    /*
     ********************************
     *          Update Node         *
     ********************************
     */
    updateNode: (nodeId, updatedNode) => {
      set((state) => {
        let targetNode = findNode(state.documentNode, nodeId);
        if (!targetNode) {
          if (DEBUG) {
            console.warn(`EditorStore:UpdateNode: Node with id ${nodeId} not found`);
          }
          return;
        }
        targetNode = Object.assign(targetNode, updatedNode);
      });
    },

    /*
     ********************************
     *        Traverse Nodes        *
     ********************************
     */
    traverseNodes(node, callback, order = 'pre') {
      if (order === 'pre') {
        callback(node);
      }
      if ('children' in node) {
        for (const child of node.children!) {
          get().traverseNodes(child, callback);
        }
      }
      if (order === 'post') {
        callback(node);
      }
    },

    /*
     ********************************
     *        Render Content        *
     ********************************
     */
    renderContent(node) {
      let content = <></>;

      switch (node.node) {
        case 'text': {
          content = <>{node.text}</>;
          if (node.bold) {
            content = <strong>{content}</strong>;
          }
          if (node.italic) {
            content = <em>{content}</em>;
          }
          if (node.underline) {
            content = <u>{content}</u>;
          }
          if (node.strikethrough) {
            content = <s>{content}</s>;
          }
          if (node.code) {
            content = <code>{content}</code>;
          }
          break;
        }
        case 'paragraph': {
          content = (
            <p id={node?.id} className={node?.className} style={node?.style}>
              {node.children.map((child) => get().renderContent(child))}
            </p>
          );
          break;
        }
        default:
        // pass
      }

      return content;
    },
    /*
     ********************************
     *        Clear Document        *
     ********************************
     */
    clearDocument() {
      set((state) => {
        state.documentNode = {
          node: 'document',
          id: 'root',
          children: [],
        };
      });
    },
  })),
);

/*
 ********************************
 *                              *
 *       Helper Functions       *
 *                              *
 ********************************
 */
const findNode = (node: AnyNode, targetId: string): AnyNode | null => {
  if (node.id === targetId) {
    return node;
  }
  if ('children' in node) {
    for (const child of node.children!) {
      const result = findNode(child, targetId);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

const findParentNode = (node: AnyNode, childId: string): AnyNode | null => {
  if ('children' in node) {
    for (const child of node.children!) {
      if (child.id === childId) {
        return node;
      }
      const parent = findParentNode(child, childId);
      if (parent) {
        return parent;
      }
    }
  }
  return null;
};

export default useEditorStore;
