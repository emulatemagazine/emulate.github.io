## Emulate Magazine Repository
A work in progress. 

**Website Team:** Buddy Luong, Maggie Needham, Ruby Butler, Karen Zhao, and Max Hinds. 

### How to Add Event Pictures

### How to Add Featured Works

### How to Add the Newest Issue to the Archives:
1. Create a folder that corresponds to the magazine issue you are uploading in "../images/library/magazines"

2. Convert the pdf of the issue into separate pngs for each page using an [online converter](https://pdf2png.com/), and rename each file according to the page it correswponds to (example: page 1 -> 1.png)

3. Upload all of the *.png files to the folder you created

4. In the archive.html file (../archives/archives/html), scroll down to the 

5. To create a new spine on the shelf, copy and paste the following code underneath the most recent one:
~~~
<div class="issue vol~INSERT_ISSUE_NUM_HERE~" id="INSERT_ISSUE_NUM_HERE" onmouseover="previewOn('INSERT_ISSUE_NUM_HERE')" onmouseout="previewOff('INSERT_ISSUE_NUM_HERE')" onclick="openViewer('bookviewer', 'INSERT_ISSUE_NUM_HERE')"> <img class="spine" src="../images/library/spines/INSERT_ISSUE_NUM_HERE.png" alt="INSERT_ISSUE_NUM_HERE"> </div>
~~~
6. Make sure to replace "INSERT_ISSUE_NUM_HERE" with the issue number of the new spine you are creating
