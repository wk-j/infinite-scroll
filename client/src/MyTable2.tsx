import React from "react"
import { InfiniteLoader, Table, Column } from "react-virtualized";

const list = []

for (var i = 0; i < 100; i++) {
    list.push({
        name: "wk",
        value: i
    })
}

var remoteRowCount = 1000

function isRowLoaded({ index }) {
    return !!list[index];
}

function loadMoreRows({ startIndex, stopIndex }) {
    var a = [];
    for (var i = startIndex; i <= stopIndex; i++) {
        list.push(
            {
                name: "wk",
                value: i
            }
        )
    }
    return Promise.resolve(a);
}

var gettter = (index) => {
    console.log(a)
    var a = list[index]
    return a;
}

export class MyTable2 extends React.Component {

    render() {
        return (
            <div>
                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={loadMoreRows}
                    rowCount={remoteRowCount} >
                    {({ onRowsRendered, registerChild }) => (
                        <Table
                            width={500}
                            height={700}
                            ref={registerChild}
                            headerHeight={20}
                            rowHeight={30}
                            rowCount={list.length}
                            rowGetter={gettter}>
                            <Column label="Name" dataKey="name" width={200} />
                            <Column width={300} label="Description" dataKey="description" />
                        </Table>
                    )}
                </InfiniteLoader>
            </div>
        )
    }
}