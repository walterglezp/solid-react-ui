import React from "react";

import Icon from "../graphic/Icon";
import { generateClassnames } from "../../utils/classnames-helper";

type InputErrorProps = {
  error: string;
  className?: string;
};

const InputError: React.FC<InputErrorProps> = ({ error, className = "" }) => {
  const classnames = generateClassnames({
    "input-error": true,
    [className]: !!className,
  });

  return (
    <p className={classnames}>
      {error}
      <Icon className="ms-2" name="exclamation-circle-fill" size={15} />
    </p>
  );
};

export default InputError;
