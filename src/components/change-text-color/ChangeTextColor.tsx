import React from "react";

type TypeProps = {
    searchValue: string
    string: string
}

const ChangeTextColor = (props: TypeProps):any => {
    const {searchValue, string} = props;
    if (!searchValue) return string;
    const regExp = new RegExp(searchValue, 'ig');
    const matchValue = string.match(regExp);
    if (matchValue) {
        return string.split(regExp).map((substr: string, index: number, array) => {
            if (index < array.length - 1) {
                const c = matchValue.shift();
                return (
                    <React.Fragment key={substr}>
                        {substr}<span  className="yellow">{c}</span>
                    </React.Fragment>
                )
            }
            return substr;
        })
    }
    return string;
}


export default ChangeTextColor;