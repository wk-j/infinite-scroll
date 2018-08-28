import React from "react"
import { render } from "react-dom";
import { Column, Table } from "react-virtualized"
import "react-virtualized/styles.css"
import { MyList } from "./MyList";
import { MyTable2 } from "./MyTable2";

type Props = {}
type State = {}

class App extends React.Component<Props, State> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <div>
                <MyList />
                {/* <MyTable2 /> */}
            </div>
        )
    }
}

var el = document.getElementById("root");
render(<App />, el);