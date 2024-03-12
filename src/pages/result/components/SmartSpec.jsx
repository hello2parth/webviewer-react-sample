import { useState } from "react";
import styles from "./SmartSpec.module.scss";
import { getDropDownData, mockData } from "./utils";
import { Select, Input } from "eg-shared/components/Input";
import Icon, { close, magnify } from "eg-shared/components/Icon";

const options = getDropDownData();

const SmartSpec = () => {
    const [selected, setSelected] = useState(options[0].value);

    return (
        <div className={styles.smartSpec}>
            <div className={styles.header}>
                <Select
                    data-tid="esign-select-field-style"
                    options={options}
                    value={selected}
                    onChange={value => {
                        setSelected(value);
                    }}
                />
                <Input
                    onChange={() => {}}
                    endAdornment={<Icon icon={close} size={Icon.sizes.M} />}
                    width={Input.WIDTH.SMALL}
                    startAdornment={<Icon icon={magnify} size={Icon.sizes.M} />}
                />
            </div>
            <div>
                {(() => {
                    const selectedData = mockData[selected];
                    return <div>{JSON.stringify(selectedData)}</div>;
                })()}
            </div>
        </div>
    );
};

export default SmartSpec;
