# Creating New Widget Dependencies #

A dependency allows you to specify javascript and css code that you want to be available to your widget as it runs. Such code will also be automatically available when an exploration creator is editing parameters for your widget.

To add a dependency called my\_dependency, create the file extensions/dependencies/my\_dependency.html. Inside this file you can write lines of the form `<script src="my/file/path.js"></script>` specifying css or js code. Alternatively you can use `<script>` tags to include javascript directly in this file.