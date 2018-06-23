function getProfile(e){
			e.preventDefault();
			console.log('Fetching...');

			var username = document.getElementById('username').value;
			if(!username || username == ''){
				username = 'Santanil';
			}

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(xhttp.readyState == 4 && xhttp.status == 200){
					var user = JSON.parse(xhttp.responseText);
					document.getElementById('profile').innerHTML = `<div class="panel panel-default">
  								<div class="panel-heading">
    									<h3 class="panel-title">${user.name}</h3>   // Displaying username   
  								</div>
  								<div class="panel-body">
    									<div class="row">
										<div class="col-md-3">
											<img src="${user.avatar_url}">     // Displaying profile image
										</div>
										<div class="col-md-9">
											<span class="label label-primary">Public Repos ${user.public_repos}</span>	// Displaying no.of public repos
											<span class="label label-danger">Public Gists ${user.public_gists}</span>	// Displaying no.of gists
											<br><br>
											<ul class="list-group">
												<li class="list-group-item">Website: ${user.blog}</li>		// Displaying no.of gists	
												<li class="list-group-item">Email: ${user.email}</li>		// Displaying email address of the user
											</ul>
											<a class="btn btn-default" target="_blank" href="${user.html_url}">Visit Github</a>	// hyperlink to the user GitHub Account
										</div>
    									</div>
  								</div>
							</div>`;
				}
			}
			xhttp.open('GET', 'https://api.github.com/users/'+username, true);
			xhttp.send();
		}

		document.getElementById('userForm').addEventListener('submit', getProfile, false);
