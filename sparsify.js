

    function sparsify(myTableId,classToAdd,classToRemove) {
      // changes classes on table column values that are identical to those above them
       var l,lp;
       var myRow,myPrevRow;
       var myCols,myPrevCols;
       var prevCell,prevCellText,myCell,myCellText;
       var myTable =document.getElementById(myTableId); if (myTable == null) return;
       var myRows = myTable.getElementsByTagName("tr"); if (myRows == null) return;
       for(var j = 1; j < myRows.length; j++) {
           myRow= myRows[j];
           myCols = myRow.getElementsByTagName("td");
           myPrevRow = myRows[j-1];   // previous row index (j-1)
           myPrevCols = myPrevRow.getElementsByTagName("td");
           if (myCols != null) {
             lp = myPrevCols.length;
             l = myRow.length;
             ll = l < lp ? l:lp;  // obtain the number of columns that can be compared
             for(var i = 0; i < ll; i++) {
               prevCell = myPrevCols[i];
               prevCellText = prevCell.childNodes[0];
               myCell = myCols[i];
               myCellText = myCell.childNodes[0];
               if (myCellText && prevCellText && (myCellText.data == prevCellText.data)) { // test params before using
                  if (classToRemove && (classToRemove.length)) myCell.classList.remove(classToRemove);
                  if (classToAdd && (classToAdd.length)) myCell.classList.add(classToAdd);
               }
             } // for i
          } // if myCols
      }  // for j
      return;
    }
