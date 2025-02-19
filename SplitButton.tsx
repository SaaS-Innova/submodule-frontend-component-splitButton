import { SplitButton } from "primereact/splitbutton";
import { ISplitButton } from "./SplitButton.model";

export const SplitButton = (props: ISplitButton) => {
  const { handleChange, label = "", modelItem, icon, severity } = props;

  return (
    <SplitButton
      label={label}
      icon={icon}
      onClick={(e: React.MouseEvent<HTMLElement>) => handleChange(e)}
      model={modelItem}
      severity={severity}
    />
  );
};

export default SplitButton;
