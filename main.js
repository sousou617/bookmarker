
// Listen for form submit
document.querySelector('#myForm')
		.addEventListener('submit', saveBookmark);

document.querySelector('#filter').addEventListener('keyup', filterBookmarks);

function saveBookmark(e) {
		//console.log('save bookmark');

		var siteName = document.querySelector('#siteName').value;
		var siteUrl = document.querySelector('#siteUrl').value;

		var bookmark = {
			name: siteName,
			url: siteUrl
		};

		if(bookmark.name == '' || bookmark.url == ''){
			alert('Please fill in the form');
			return false;
		}

		// console.log(siteName);
		//test local Storage
		//localStorage.setItem('test', "Hello World");
		//console.log(localStorage.getItem('test'));


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

		//reset form
		document.querySelector('#myForm').reset();

		//fetch the bookmarks
		fetchBookMarks();

		//prevents form from submitting
		e.preventDefault(); 
}

function fetchBookMarks() {

	//Get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//get the output id
	var bookmarksResult = document.querySelector('#bookmarksResult');

	//build output
	bookmarksResult.innerHTML = '';

	//loop through bookmarks
	for (var i = 0; i <bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResult.innerHTML +=
				'<li class="list-group-item book">' +
					'<h3>' + name + '</h3>' +
					'<a class="btn btn-success" href="' +url + '">Visit</a>' +
					'<a class="btn btn-danger" onclick="deleteBookmark(\'' +url+ '\')" href="#">Delete</a>'		
				'</li>'
	}
}

function deleteBookmark(url) {

	//Test if the funtion is called
	// console.log('hello from deleteBookmark');

	//1. get bookmarks from localStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	//2. loop through bookmarks
	for (var i = 0; i <bookmarks.length; i++) {
		if(bookmarks[i].url == url){
			// 3. remove bookmark from bookmarks array
			bookmarks.splice(i,1);
			break;
		}
	}

	//4. reset bookmarks array back to localStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// re-fetch bookmarksResult
	fetchBookMarks();
}


function filterBookmarks() {
	//test if fx is called
	// console.log(1);

	//get the input value
	let filterValue = document.querySelector('#filter').value.toUpperCase();
	// console.log(filterValue)

	//get all bookmarks li
	let bookmarks = document.querySelectorAll('.book');
	// console.log(bookmarks);

	//Loop through bookmarks
	for(let i=0;i<bookmarks.length;i++) {

		//get h3 tag in current li
		let bookmarksName = bookmarks[i].querySelector('h3');

		//if input value is related to bookmark
		if(bookmarksName.innerHTML.toUpperCase().includes(filterValue)) {
			//show the list item
			bookmarks[i].style.display="block";
		} else {
			//hide the list item
			bookmarks[i].style.display="none";
		}
	}
}