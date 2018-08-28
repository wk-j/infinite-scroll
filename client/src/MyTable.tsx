import { render } from "react-dom";
import React from "react";
import { Table, Column } from "react-virtualized";

var list = [
]

for (var i = 0; i < 100000; i++) {
    list.push(
        { name: 'Brian Vaughn ' + i, description: 'Software engineer' },
    )
}

export class MyTable {

    Table = ({ }) =>
        (
            <Table
                width={500}
                height={700}
                headerHeight={20}
                rowHeight={30}
                rowCount={list.length}
                rowGetter={({ index }) => list[index]} >
                <Column
                    label='Name'
                    dataKey='name'
                    width={200} />
                <Column
                    width={300}
                    label='Description'
                    dataKey='description' />
            </Table>
        )

    render() {
        return <this.Table />
    }

}