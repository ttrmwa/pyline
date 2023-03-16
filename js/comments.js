     
      // Get all the "show links" links on the page
      var showreplyLinks = document.querySelectorAll('.show-reply');

      // Loop through each link and add a click event listener
      showreplyLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default link behavior

          // Get the ID of the parent div for this link
          var parentDivId = this.getAttribute('id');
          // Get the corresponding link element and toggle its display
          var reply = document.querySelector('#' + parentDivId.replace('parent-comment', 'reply'));
          reply.style.display = (reply.style.display === 'none') ? 'block' : 'none';
        });
      });

      function autoExpand(textarea) {
        textarea.style.height = '0px';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
  $(function() {
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: '../lib/emoji-picker/img/',
      popupButtonClasses: 'far fa-smile'
    });
    window.emojiPicker.discover();
  });

// Get all file input elements with the class "file-input"
const fileInputs = document.querySelectorAll(".file-input");

// Loop through each file input element
fileInputs.forEach((input) => {
  // Add a change event listener to each input element
  input.addEventListener("change", (event) => {
    const previewDiv = input.closest(".file-input-container").querySelector(".file-preview");

    // Loop through all selected files and create preview elements for them
    for (let file of event.target.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const preview = document.createElement("div");
        preview.classList.add("preview-image");

        // Create an img element with the uploaded image as the source
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);

        // Create a button element to remove the image
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "x";
        removeBtn.addEventListener("click", () => {
          // Remove the preview element and reset the file input element
          preview.remove();
          input.value = "";
        });
        preview.appendChild(removeBtn);

        // Add the preview element to the preview div
        previewDiv.appendChild(preview);
      };

      reader.readAsDataURL(file);
    }
  });
});