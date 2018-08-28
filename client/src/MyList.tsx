import React from 'react';

import ReactDOM from 'react-dom';
import { InfiniteLoader, List } from 'react-virtualized';
import { realpathSync } from 'fs';

const list = []
const remoteRowCount = 1000;

function isRowLoaded({ index }) {
    return !!list[index];
}

function loadMoreRows({ startIndex, stopIndex }) {
    var a = [];
    for (var i = startIndex; i <= stopIndex; i++) {
        list.push(
            <div>
                <span>{i} </span>
                <span>Hello</span>
                <span> {i}</span>
            </div>
        )
    }
    return Promise.resolve(a);
}

function rowRenderer({ key, index, style }) {
    return (
        <div key={key} style={style} >
            {list[index]}
        </div>
    )
}

export class MyList extends React.Component {

    render() {
        return (
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={remoteRowCount} >
                {({ onRowsRendered, registerChild }) => (
                    <List
                        height={200}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        rowCount={remoteRowCount}
                        rowHeight={20}
                        rowRenderer={rowRenderer}
                        width={300} />
                )}
            </InfiniteLoader>
        )
    }

}