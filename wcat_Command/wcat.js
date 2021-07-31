let fs=require("fs");
let path=require("path")

let inputArray=process.argv.slice(2);


let optionArr=[];
let FilesArr=[];
for(let i=0;i<inputArray.length;i++)
{
    let firstChar=inputArray[i].charAt();
    if(firstChar=='-')
    {
        optionArr.push(inputArray[i]);
    }
    else{
        FilesArr.push(inputArray[i]);
    }
}
for(let i=0;i<FilesArr.length;i++)
{
 if(fs.existsSync(FilesArr[i])==false)
 {
     console.log("File Not Exist");
     return;
 }
}
let k=1;
let b=1;
for(let i=0;i<FilesArr.length;i++)
{
    
            //------>>>> remove multiple Line and Show only one line
        if(optionArr.includes("-s"))
        {
            let content="";
            content=fs.readFileSync(FilesArr[i])+"";
            let contentOfFile=content.split("\n");
            let arr=contentOfFile;
            // console.log(arr);
            //assign null to space lines
            for(let i=1;i<arr.length;i++)
            {
                if(arr[i]=="" && arr[i-1]=="")
                {
                    arr[i]=null;
                }
                else if(arr[i]=="" && arr[i-1]==null){
                    arr[i]=null;
                    }
            }
        //remove space lines
            let temparr=[]
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i]!==null)
                {
                    temparr.push(arr[i]);
                }
            }
            // console.log(temparr.join("\n"));
            if(optionArr.includes("-n"))
            {
                // let content="";
                // content=fs.readFileSync(FilesArr[i])+"";
                // let contentOfFile=content.split("\n");
                // let arr=contentOfFile;
                // console.log(arr);
                for(let i=1;i<=temparr.length;i++)
                {
                    console.log(k+" "+arr[i-1]);
                    k++;
                }
            }
            else if(optionArr.includes("-b"))
            {
                // let content="";
                // content=fs.readFileSync(FilesArr[i])+"";
                // let contentOfFile=content.split("\n");
                for(let i=0;i<temparr.length;i++)
                {
                    if(contentOfFile[i]!="")
                    {
                        process.stdout.write(b.toString());
                        b++;
                    }
                        console.log(" " +contentOfFile[i]);
                }
            }
            else{
                console.log(temparr.join("\n"));
            }

        }

//----->>>>counting the Lines
        else if(optionArr.includes("-n"))
        {
            let content="";
            content=fs.readFileSync(FilesArr[i])+"";
            let contentOfFile=content.split("\n");
            let arr=contentOfFile;
            // console.log(arr);
            for(let i=1;i<=arr.length;i++)
            {
                console.log(k+" "+arr[i-1]);
                k++;
            }
        }
//----->>>>counting the Lines
        else if(optionArr.includes("-b"))
        {
            let content="";
            content=fs.readFileSync(FilesArr[i])+"";
            let contentOfFile=content.split("\n");
            for(let i=0;i<contentOfFile.length;i++)
            {
                if(contentOfFile[i]!="")
                {
                    process.stdout.write(b.toString());
                    b++;
                }
                    console.log(" " +contentOfFile[i]);
            }
        }
}
