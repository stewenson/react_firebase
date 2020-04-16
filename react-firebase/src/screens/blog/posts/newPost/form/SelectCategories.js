import React from "react";

export default function SelectCategories(props) {
    const categories = Object.entries(props.data)
        .map(([key, data]) => (
            <option key={data.id} value={data.category} label={data.category}>
                {data.category}
            </option>
        ));
    return (
        <select
            name="category"
            value={props.value}
            onChange={props.changed}
            onBlur={props.onBlur}
            style={{ display: "block" }}
        >
            {categories}
        </select>
    )

}