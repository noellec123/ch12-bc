"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Noelle
   Date:   1/13/2020

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

// Generate an outline based on h1 through h6 headings in the source document


window.addEventListener("load", makeOutline);

function makeOutline(){
	// Location of the document outline
	var outline = document.getElementById("outline");
	
	// Source document for the outline
	var source = document.getElementById("doc");
	
	// Variables containing document fragments
	var mainHeading = document.createElement("h1");
	var outlineList = document.createElement("ol");
	var headingText = document.createTextNode("Outline");
	
	// Attach the fragments to the document node tree
	mainHeading.appendChild(headingText);
	outline.appendChild(mainHeading);
	outline.appendChild(outlineList);
	
	// Call the createList() function
	createList(source, outlineList)
}

function createList(source, outlineList){
	// Heading array for the outline
	var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
	
	// Variable that stores the previous level of the headings
	var prevLevel = 0;
	
	// Running total of the article headings
	var headNum = 0;
	
	// Loop through all of the child nodes of the source article until no child nodes are left
	for(var n = source.firstChild; n !== null; n = n.nextSibling){
		// Examine only article headings
		var headLevel = headings.indexOf(n.nodeName);
		
		// Check if headLevel has a valid heading value
		if(headLevel !== -1){
			// Add an id attribute to the heading if it is missing
			headNum++;
			if(n.hasAttribute("id") ===false){
				n.setAttribute("id", "head" + headNum);
			}
			var listElem = document.createElement("li");
			
			// Create the hypertext links to the document headings
			var linkElem = document.createElement("a");
			// Changes the text of the hypertext link to match the heading 
			listElem.innerHTML = n.firstChild.nodeValue;
		    // Create the href attribute needed for the link
			linkElem.setAttribute("href", "#" + n.id);
			// Append the hypertext link to the list item element
			listElem.appendChild(linkElem);
		
		//New IF statements determine where list items should go
			if(headLevel === prevLevel){
				// Append the list item to the current list
				outlineLiat.appendChild(listElem);
			} else if(headLevel > prevLevel){
				// Start a new nested list
				var nestedList = document.createElement("ol");
				nestedList.appendChild(listElem);
				
				// Append the nested list to last item in the current list
				outlineList.lastChild.appendChild(nestedList);
				
				// Change the current list to the nested list
				outlineList = nestedList;
			} else{
			     // Calculate the difference between the current and previous level
				 var levelUp = prevLevel - headLevel;
				 
				 // Go up to the higher level list
				 for(var i = 1; i <= levelUp; i++){
					 outlineList = outlineList.parentNode.parentNode;
				 }
				 
				 //Append to the proper list
				 outlineList.appendChild(listElem);
			}
			
			// Update the value of prevLevel
			prevLevel = headLevel;
			
		} // end original IF statement
		
	} // end of for loop
	
} // ends the createLisr=t() function


















