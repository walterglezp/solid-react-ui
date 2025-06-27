import React from "react";

import { Icon } from "../graphic/Icon";
import { Flex } from "../layout/Flex";
import { generateClassnames } from "../../utils/classnames-helper";

type InputErrorProps = {
  error: string;
  className?: string;
};

const InputError: React.FC<InputErrorProps> = ({
  error,
  className = "mt-3",
}) => {
  const classnames = generateClassnames({
    "input-error": true,
    "text-danger": true,
    [className]: !!className,
  });

  return (
    <Flex justify="start" align="center" className={classnames}>
      <span>{error}</span>
      <Icon
        className="ms-2 text-danger"
        name="exclamation-circle-fill"
        size={15}
      />
    </Flex>
  );
};

export { InputError };
