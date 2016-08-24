# sparsify
for HTML tables, this javascript routine hides column values that are duplicates ( by using classes ).  No dependencies.   You can also color the cell using classes, which may be preferred.


### example


    <!DOCTYPE html>

    <head>
     <script src="sparsify.js"></script>
     <style>
      .red {color:red;}
      .yellow {color:yellow;}
     </style>
    </head>
    <body onload="sparsify('table1','red'); sparsify('table1','yellow','red');">
      <table id = 'table1'>
      <tr> <td>col1</td> <td>Col2</td> <td>col3</td>
      </tr>
      <tr> <td>col1</td> <td>col2</td> <td>col3</td>
      </tr>
      <tr> <td>col1</td> <td>col2</td> <td>Col3</td>
      </tr>
      </table>
    </body>

