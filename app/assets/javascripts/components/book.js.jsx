var Book = React.createClass({
  propTypes: {
    book: React.PropTypes.object
  },

  render: function() {
    return (
      <div className="demo-card-event mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h4>
            {this.props.book.title}
            <br />
            <small>{this.props.book.author}</small>
            <br />
            <p>Page {this.props.book.current_page} of {this.props.book.pages}</p>
          </h4>

          <button id="demo-menu-lower-right" style={{marginLeft: '40%'}}
                  className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
          </button>

          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="demo-menu-lower-right">
            <li className="mdl-menu__item">Change current page</li>
            <li className="mdl-menu__item">Discard</li>
            <li className="mdl-menu__item">Delete</li>
          </ul>

        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Add Reading
          </a>
          <div className="mdl-layout-spacer"></div>
          <i className="material-icons">book</i>
        </div>
      </div>
    );
  }
});
