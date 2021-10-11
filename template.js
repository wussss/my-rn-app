/**
 * pages模版快速生成脚本
 **/

 import FS from 'fs'

 const dirName = process.argv[2] //path
 
 if (!dirName) {
   console.log('文件夹名称不能为空')
   console.log('示例:yarn temp test')
   process.exit(0)
 }
 function titleCase(str) {
    const array = str.toLowerCase().split(' ');
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
    }
    const string = array.join(' ');
    return string
  }
  
 // 页面模版
 const indexTemp = `import React,{memo} from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 
 const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
  },
 });
 const ${titleCase(dirName)} = () => {
   return (
     <View style={styles.contain}>
       <Text style={styles.text}>This is ${dirName} page!</Text>
     </View>
   );
 };
 
 export default memo(${titleCase(dirName)});
 
 `;
 
 

   
 FS.mkdirSync(`./src/pages/${dirName}`)
 process.chdir(`./src/pages/${dirName}`)
 FS.writeFileSync('index.tsx', indexTemp)

 process.exit(0)