var BookList = React.createClass({
  propTypes: {
    books: React.PropTypes.array
  },

  render: function() {

    function createBooks(item) {
      return (
        <Book key={item.id} book={item} />
      )
    }

    var listItems = this.props.books.map(createBooks);

    return (
      <div>
        {listItems}
      </div>
    );
  }
});
