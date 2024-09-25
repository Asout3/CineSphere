function loadMovie(videoUrl, title, description) {
    // Set the video iframe src to the selected movie
    document.getElementById('video-iframe').src = videoUrl;
    
    // Set the movie title and description
    document.getElementById('movie-title').innerText = title;
    document.getElementById('movie-description').innerText = description;

    // Show movie details and hide the movie list
    document.querySelector('.movie-list').style.display = 'none';
    document.getElementById('movie-details').classList.remove('hidden');
}

function goBack() {
    // Hide movie details and show the movie list again
    document.querySelector('.movie-list').style.display = 'flex';
    document.getElementById('movie-details').classList.add('hidden');
    
    // Stop the video by clearing the iframe src
    document.getElementById('video-iframe').src = '';
}
