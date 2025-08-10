import { sql } from "drizzle-orm";
import {
  text,
  integer,
  uniqueIndex,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

// Boards owned by a user, can have collaborators
export const boards = sqliteTable("boards", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  owner_id: text("owner_id").notNull(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Columns inside boards, ordered by position
export const columns = sqliteTable("columns", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  board_id: integer("board_id").notNull(),
  name: text("name").notNull(),
  position: integer("position").notNull().default(0),
  wip_limit: integer("wip_limit").default(0),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Tasks with optional parent_task_id for child tasks
export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  board_id: integer("board_id").notNull(),
  column_id: integer("column_id").notNull(),
  parent_task_id: integer("parent_task_id"), // nullable parent task reference
  title: text("title").notNull(),
  description: text("description").default(""),
  order_key: integer("order_key").notNull().default(1000),
  assignee_id: text("assignee_id"),
  priority: text("priority"),
  due_date: text("due_date"),
  meta: text("meta"),
  version: integer("version").notNull().default(1),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Labels per board
export const labels = sqliteTable("labels", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  board_id: integer("board_id").notNull(),
  name: text("name").notNull(),
  color: text("color"),
});

// Join table: tasks <-> labels (many-to-many)
export const task_labels = sqliteTable(
  "task_labels",
  {
    task_id: integer("task_id").notNull(),
    label_id: integer("label_id").notNull(),
  },
  (table) => [uniqueIndex("task_label_pk").on(table.task_id, table.label_id)]
);

// Comments on tasks
export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  task_id: integer("task_id").notNull(),
  author_id: text("author_id").notNull(),
  content: text("content").notNull(),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Attachments on tasks
export const attachments = sqliteTable("attachments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  task_id: integer("task_id").notNull(),
  url: text("url").notNull(),
  filename: text("filename"),
  uploaded_by: text("uploaded_by"),
  created_at: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// Collaborators invited to boards, with roles (viewer/editor/admin)
export const board_collaborators = sqliteTable("board_collaborators", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  board_id: integer("board_id").notNull(),
  user_id: text("user_id").notNull(),
  role: text("role").notNull(),
  invited_by: text("invited_by").notNull(),
  accepted: integer("accepted").notNull().default(0),
  invited_at: text("invited_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  accepted_at: text("accepted_at"),
});

// Invitations for users not yet registered or accepted
export const invitations = sqliteTable("invitations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  board_id: integer("board_id").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  invited_by: text("invited_by").notNull(),
  token: text("token").notNull(),
  accepted: integer("accepted").notNull().default(0),
  invited_at: text("invited_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  accepted_at: text("accepted_at"),
});
