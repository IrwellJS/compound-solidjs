import {Component, For, JSXElement} from "solid-js";

export interface TableProps {
    headers: string[] | JSXElement[];
    rows: string[][] | JSXElement[][];
}

export const Table: Component<TableProps> = (props) => {
    return (
        <div class="overflow-x-auto">
            <table class="table table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <For each={props.headers}>
                            {(header) => (
                                <th>{header}</th>
                            )}
                        </For>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.rows}>
                        {(row) => (
                            <tr>
                                <For each={row}>
                                    {(cell) => (
                                        <td>{cell}</td>
                                    )}
                                </For>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
