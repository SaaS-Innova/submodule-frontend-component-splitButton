import { SplitButton } from "primereact/splitbutton";
import { ISplitSelectButton } from "./SplitSelectButton.model";

export const SplitSelectButton = (props: ISplitSelectButton) => {
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

export default SplitSelectButton;
