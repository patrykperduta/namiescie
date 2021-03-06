import React from "react";
import cls from "./Overlay.css";

class Overlay extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    step: React.PropTypes.string,
    start: React.PropTypes.func.isRequired,
    selectSex: React.PropTypes.func.isRequired,
    selectTag: React.PropTypes.func.isRequired,
    acceptNotification: React.PropTypes.func.isRequired,
    rejectNotification: React.PropTypes.func.isRequired,
  };

  render() {
    switch(this.props.step) {
      case "start":
        return (
          <div className={ cls.overlay }>
            <button className={ cls.start } onClick={ this.props.start }>#namiescie</button>
          </div>
        );
      case "selectSex":
        return (
          <div className={ cls.overlay }>
            <div className={ cls.sexButtons }>
              <h1 className={ cls.yesNoTitle }>twoja planeta?</h1>
              <button className={ cls.sexButton } onClick={ () => this.props.selectSex("male") }>
                <i className="fa fa-mars"></i>
              </button>
              <button className={ cls.sexButton } onClick={ () => this.props.selectSex("female") }>
                <i className="fa fa-venus"></i>
              </button>
            </div>
          </div>
        );
      case "selectTag":
        return (
          <div className={ cls.overlay }>
            <ul className={ cls.tags }>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("piwo") }>#piwo</button></li>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("kino") }>#kino</button></li>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("muzyka") }>#muzyka</button></li>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("cafe") }>#cafe</button></li>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("party") }>#party</button></li>
              <li className={ cls.tag }><button onClick={ () => this.props.selectTag("spacer") }>#spacer</button></li>
            </ul>
          </div>
        );
      case "handleGetNotified":
        return (
          <div className={ cls.overlay }>
            <div className={ cls.yesNoButtons }>
              <h1 className={ cls.yesNoTitle }>idziemy?</h1>
              <button className={ cls.yesNoButton } onClick={ this.props.acceptNotification }>
                <i className="fa fa-thumbs-up"></i>
              </button>
              <button className={ cls.yesNoButton } onClick={ this.props.rejectNotification }>
                <i className="fa fa-thumbs-down"></i>
              </button>
            </div>
          </div>
        );
      case "place":
        return (
          <div className={ cls.overlay }>
            <h1 className={ cls.placeTitle }>{ this.props.data.name }</h1>
          </div>
        );
      default:
        return null;
    }
  }
}

export default Overlay;
