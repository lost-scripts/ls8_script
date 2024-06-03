/* 
ScriptName = "index.js"
ScriptBirth = "20240506-0030"
ScriptBuild = "20240521-0542"
*/

if (!window.scriptLoaded) { //If scriptLoaded is not true (or not defined), run this block and set scriptLoaded to true.
	window.scriptLoaded = true;
	var currentScriptPath = document.currentScript.src;
	var isExpanded = false; // Initial state, all contracted

	document.addEventListener('DOMContentLoaded', function() {
		if (window.self === window.top) { // if not in an iframe...
			var scriptPath = currentScriptPath;

			if (scriptPath) { //(scriptPath && window.self === window.top)
				var dirPath = scriptPath.slice(0, scriptPath.lastIndexOf('/') + 1); // Use substring instead of slice?
				var indexPath = dirPath + "index.html";
				var pagePath = window.location.href; // Use window.location.pathname instead?
				var pagePathRel = getRelativePath(dirPath, pagePath); // Output e.g.: "../../ls_script/docs/index.html"
				var newPath = indexPath + "#" + pagePathRel; // Construct the new URL with the relative path after hash

				window.location.href = newPath; // Redirect to index.html with the final path
			} else {
				console.error('No se pudo encontrar el tag de script para index.js');
			}
		} else {
			var basicStyles = document.getElementById('basic-styles');
			if (basicStyles) { // It doesn't seem to be necessary if they are declared before loading index.css, but remove basic styles if you are in an iFrame, just in case?
				basicStyles.parentNode.removeChild(basicStyles);
				console.log('Estilos básicos eliminados en el iFrame.');
			}
		}

		/*
		var pages = [
			{ name: 'Home', url: 'index_home.html' },
			{ name: 'Installation', url: 'index_installation.html' },
			{ name: 'Other', url: 'index_other.html' },
			{ 
				name: 'Category 1', 
				content: [
					{ name: 'Subpage 1.1', url: 'index_subpage1.html' },
					{ name: 'Subpage 1.2', url: 'index_subpage2.html' }
				]
			},
			{ 
				name: 'Category 2', 
				content: [
					{ name: 'Subpage 2.1', url: 'index_subpage1.html' },
					{ name: 'Subpage 2.2', url: 'index_subpage2.html' }
				]
			},
			// ... more pages and categories ...
		];

		function createTreeView(container, items) {
			items.forEach(function(item) {
				if (item.content) { // If it has content, it is a category
					var details = document.createElement('details');
					details.id = 'menu-details';
					var summary = document.createElement('summary');
					summary.textContent = item.name;
					summary.id = 'menu-summary';
					//summary.style['font-weight'] = 'bold';
					details.appendChild(summary);

					var nestedList = document.createElement('ul');
					createTreeView(nestedList, item.content); // Recursive call for subpages
					details.appendChild(nestedList);
					container.appendChild(details);
				} else { // Otherwise, it is a normal page
					var listItem = document.createElement('li');
					listItem.textContent = item.name;
					listItem.id = 'menu-item';
					//listItem.style['font-weight'] = 'bold';
					listItem.setAttribute('data-url', item.url);
					listItem.onclick = function() {
					loadContent(item.url);
					};
					container.appendChild(listItem);
				}
			});
		}

		function loadContent(url) {
			var iframe = document.getElementById('iframe') || document.createElement('iframe');
			iframe.style.width = '100%';
			iframe.style.height = '100%';
			iframe.style.margin = '0';
			iframe.style.padding = '0';
			iframe.style['overflow-y'] = 'auto';
			iframe.style['scrollbar-color'] = 'orange yellow';
			iframe.style['scrollbar-width'] = 'thin';
			// iframe.scrolling= 'yes';
			iframe.frameborder = '0';
			iframe.marginwidth = '0';
			iframe.marginheight = '0';
			iframe.id = 'iframe';
			iframe.src = url;

			var contentDiv = document.getElementById('icontainer');
			contentDiv.innerHTML = '';
			contentDiv.appendChild(iframe);
		}

		var menu = document.getElementById('menu');
		var list = document.createElement('ul');
		list.id = 'menu-list';
		createTreeView(list, pages); // Start construction of the navigation menu
		menu.appendChild(list);
		*/
	});

	function getRelativePath(source, target) {
		// Split the paths into arrays of directories
		const fromParts = source.split('/');
		const toParts = target.split('/');

		// Remove the file name from source
		fromParts.pop();

		// Find the index at which the paths diverge
		let i = 0;
		while (i < fromParts.length && i < toParts.length && fromParts[i] === toParts[i]) {
			i++;
		}

		// Calculate the number of directories to go up from the source
		const numUpDirs = fromParts.length - i;

		// Construct the relative path
		let relativePath = '';
		for (let j = 0; j < numUpDirs; j++) {
			relativePath += '../';
		}
		for (let k = i; k < toParts.length; k++) {
			relativePath += toParts[k];
			if (k < toParts.length - 1) {
				relativePath += '/';
			}
		}

		return relativePath;
	}

	function getRelativePathAlt(source, target) {
		var sep = (source.indexOf("/") !== -1) ? "/" : "\\",
			targetArr = target.split(sep),
			sourceArr = source.split(sep),
			relativePath = "";

		// Remove protocol and host to work only with the file path
		sourceArr = sourceArr.slice(3);
		targetArr = targetArr.slice(3);

		// Find the index where paths diverge
		var i = 0;
		while (sourceArr[i] && sourceArr[i] === targetArr[i]) {
			i++;
		}

		// Add ".."" for each remaining directory in the source
		for (var j = i; j < sourceArr.length - 1; j++) { // -1 para no contar el directorio actual
			relativePath += ".." + sep;
		}

		// Add the remaining directories of the target
		for (var k = i; k < targetArr.length; k++) {
			relativePath += targetArr[k] + sep;
		}

		// Remove final separator if necessary
		if (!target.endsWith(sep)) {
			relativePath = relativePath.slice(0, -1);
		}

		return relativePath;
	}

	/*
	function toggleExpansion() {
		const detailsElements = document.querySelectorAll("details");
		const toggleButton = document.getElementById('toggleButton');

		detailsElements.forEach(item => {
			if (!isExpanded) {
				item.setAttribute("open", "");
			} else {
				item.removeAttribute("open");
			}
		});

		// Change button state and text
		isExpanded = !isExpanded;
		toggleButton.textContent = isExpanded ? "Contract All" : "Expand All";
	}
	*/

	function set_theme(name){
		document.cookie = 'sel_theme='+name+';';
	} // so, run set_theme('whatevername'); when it is set by the user (SOURCE: https://stackoverflow.com/a/1616973/2805176)

	window.onload=function(){
		var cookie_pos = document.cookie.indexOf('sel_theme='); // locate value in cookie
		if(cookie_pos != -1){ // if string was found
			var cookie_flavor = substr(cookie_pos + 10, document.cookie.indexOf(';', cookie_pos)); // extract the value of the cookie
			// then run your already existing change theme function using the extracted name (SOURCE: https://stackoverflow.com/a/1616973/2805176)
		}
	}
}