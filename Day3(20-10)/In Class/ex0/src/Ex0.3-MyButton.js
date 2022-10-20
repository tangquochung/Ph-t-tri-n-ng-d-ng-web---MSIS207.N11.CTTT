import*as React from "react";

class MyButton extends React.Component {
    render() {
        return <button>{this.prop.children}</button>;
    }
}

export default MyButton;