import * as React from "react";

function SvgArrow(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <g data-name="Circle Right">
                <circle cx={12} cy={12} r={10} fill="currentColor" />
                <path
                    d="M17.706 11.292l-3-3a1 1 0 00-1.414 1.414L14.586 11H7a1 1 0 000 2h7.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 00-.001-1.415z"
                    fill="#ff8e31"
                />
            </g>
        </svg>
    );
}

export default SvgArrow;