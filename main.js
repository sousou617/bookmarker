
// Listen for form submit
// document.querySelector('#myForm')
// 		.addEventListener('submit', saveBookmark);

function saveBookmark(e) {
		//console.log('save bookmark');

		var siteName = document.querySelector('#siteName').value;
		var siteUrl = document.querySelector('#siteUrl').value;

		var bookmark = {
			name: siteName,
			url: siteUrl
		};

		//check if the bookmarks array exists
		if (localStorage.getItem('bookmarks') === null) {
			//init array
			var bookmarks = [];

			//add bookmark to array
			bookmarks.push(bookmarks);

			//set localStorage
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		} else {
			//get bookmarks from localStorage
			var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
			//add new bookmarks into bookmarks array
			bookmarks.push(bookmarks);
			//reset bookmarks back in to localStorage
			localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
		}

		//to reset form
			document.querySelector('#myForm').reset();

		//test local storage
		//localStorage.setItem('test','Hello World');
		//localStorage.getItem('test')
		//console.log(localStorage.getItem('test'));


		e.preventDefault(); //prevents form from submitting
}

function fetchBookMarks(){

	//Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//get the output id
	var bookmarksResult = document.querySelector('#bookmarksResult');

	//build output
	var bookmarksResult.innerHTML = '';

	for (var i = 0; i <,bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarks.innerHTML +=
				'<div><h3>' + name + ' '
				'<a class="btn btn-success" href="' +url + '">Visit</a>' +
				'<a class="btn btn-danger" onclick="deleteBookmark(' + url + ') href="#">Delete</a>'
				'</h3></div>'
	}
}