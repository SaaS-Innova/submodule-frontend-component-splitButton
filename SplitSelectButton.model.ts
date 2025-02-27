import { MenuItem } from "primereact/menuitem";
import React from "react";

export interface ISplitSelectButton {
  handleChange: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
  modelItem?: MenuItem[];
  icon?: string;
  severity?: "secondary" | "success" | "info" | "warning" | "danger";
}
