
            //for showing file name on upload
            const fileInput = document.getElementById('file-input');
            const filePreview = document.getElementById('file-preview');
            
            fileInput.addEventListener('change', () => {
              const files = fileInput.files;
              
              for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
              
                reader.addEventListener('load', () => {
                  const fileContents = reader.result;
                  let mediaElement;
              
                  if (file.type.startsWith('image/')) {
                    // Create an <img> element for image files
                    mediaElement = document.createElement('img');
                    mediaElement.src = fileContents;
              
                    // Create a delete icon to remove the image
                    const deleteIcon = document.createElement('span');
                    deleteIcon.classList.add('delete-icon');
                    deleteIcon.innerHTML = '<i class="typcn typcn-delete-outline" aria-hidden="true"></i>';
                    deleteIcon.addEventListener('click', () => {
                      filePreview.removeChild(mediaElement);
                      filePreview.removeChild(deleteIcon);
                      fileInput.value = '<i class="typcn typcn-delete" aria-hidden="true"></i>';
                      filePreview.style.display = 'inline-block';
                    });
              
                    mediaElement.style.display = 'inline-block';
                    deleteIcon.style.display = 'inline-block';
                    filePreview.style.display = 'inline-block';
                    filePreview.appendChild(mediaElement);
                    filePreview.appendChild(deleteIcon);
                  } else if (file.type.startsWith('video/')) {
                    // Create a <video> element for video files
                    mediaElement = document.createElement('video');
                    mediaElement.src = fileContents;
                    mediaElement.setAttribute('controls', true);
              
                    // Create a delete icon to remove the video
                    const deleteIcon = document.createElement('span');
                    deleteIcon.classList.add('delete-icon');
                    deleteIcon.innerHTML = '';
                    deleteIcon.addEventListener('click', () => {
                      filePreview.removeChild(mediaElement);
                      filePreview.removeChild(deleteIcon);
                      fileInput.value = '';
                      filePreview.style.display = 'inline-block';
                    });
              
                    mediaElement.style.display = 'inline-block';
                    deleteIcon.style.display = 'inline-block';
                    filePreview.style.display = 'inline-block';
                    filePreview.appendChild(mediaElement);
                    filePreview.appendChild(deleteIcon);
                  }
                });
              
                reader.readAsDataURL(file);
              }
            });
      

      //for displaying emojis in the textarea
      const postText = document.getElementById("post-text");
      postText.addEventListener("input", () => {
        postText.style.height = "auto";
        postText.style.height = `${postText.scrollHeight}px`;
      });
      
      $(document).ready(function() {
        $('.select2').select2();
          $("#post-text").emojioneArea({
            maxLength: 200,
            pickerPosition: "bottom",
            emojiSize: 32
          });
          });
          //toggling search icon
          const searchIcon = document.querySelector('.search-icon');
          const searchForm = document.querySelector('.search-form');
  
          searchIcon.addEventListener('click', () => {
          searchForm.classList.toggle('active');
          });
  
          document.addEventListener('click', (event) => {
          if (!searchForm.contains(event.target) && event.target !== searchIcon) {
              searchForm.classList.remove('active');
          }
          });

                //for smooth scrolling
      $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();
      
          var target = this.hash;
          var $target = $(target);
      
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 900, 'swing', function () {
              window.location.hash = target;
          });
        });
        $('.share-icon').click(function() {
          $('.share-icons').toggle();
        });
      });