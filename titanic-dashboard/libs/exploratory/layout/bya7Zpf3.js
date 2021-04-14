window["viz_bya7Zpf3"]= {"name":"bya7Zpf3","displayName":"Chart 2","dependencies":["train"],"transformName":"train_Source1","options":{"marker":"bar","x":{"name":"Sex","displayName":"","validName":"Sex","type":"character","isNumeric":false,"isDate":false,"func":"none","label":"c1","validLabel":"c1"},"y":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c2","validLabel":"c2"},"size":"","color":{"name":"Survived","displayName":"","validName":"Survived","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c3","validLabel":"c3"},"text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"PassengerId","type":"numeric","escapedName":"PassengerId","isNumeric":true,"isDate":false},{"name":"Survived","type":"numeric","escapedName":"Survived","isNumeric":true,"isDate":false},{"name":"Pclass","type":"numeric","escapedName":"Pclass","isNumeric":true,"isDate":false},{"name":"Name","type":"character","escapedName":"Name","isNumeric":false,"isDate":false},{"name":"Sex","type":"character","escapedName":"Sex","isNumeric":false,"isDate":false},{"name":"Age","type":"numeric","escapedName":"Age","isNumeric":true,"isDate":false},{"name":"SibSp","type":"numeric","escapedName":"SibSp","isNumeric":true,"isDate":false},{"name":"Parch","type":"numeric","escapedName":"Parch","isNumeric":true,"isDate":false},{"name":"Ticket","type":"character","escapedName":"Ticket","isNumeric":false,"isDate":false},{"name":"Fare","type":"numeric","escapedName":"Fare","isNumeric":true,"isDate":false},{"name":"Cabin","type":"character","escapedName":"Cabin","isNumeric":false,"isDate":false},{"name":"Embarked","type":"character","escapedName":"Embarked","isNumeric":false,"isDate":false}],"data":{"c3":["1","1","0","0","1","1","0","0"],"c1":["female","male","female","male","female","male","female","male"],"c2":[null,null,null,null,233,109,81,468],"..nrow":[null,null,null,null,233,109,81,468],"..is.order.row":["TRUE","TRUE","TRUE","TRUE",null,null,null,null]},"query":"try(jsonlite::toJSON({.dqdf <- `train_Source1`;\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate_if(bit64::is.integer64, as.numeric) %>% \ndplyr::mutate_if(lubridate::is.period, lubridate::as.difftime) %>% \ndplyr::mutate_if(lubridate::is.interval, lubridate::as.difftime) %>% \ndplyr::mutate_if(lubridate::is.difftime, as.numeric) %>% \ndplyr::mutate(c3=(function(x) {\n  if (!is.factor(x)) {\n    x <- factor(x) \n  }; \n  if (length(unique(x)) <= 20) {\n    return (x); \n  };\n  return (\n    forcats::fct_lump(\n      x, \n      n=20,\n      ties.method =\"first\",\n      other_level = \"Others\"\n    )\n  )\n})(Survived),c1=`_tam_convert_na`(Sex, drop.unused.levels=TRUE, na.alt.text=\"(NA)\"),c2=1,..nrow=1) %>% \ndplyr::filter(!is.na(c3) & !is.na(c1)) %>% \ndplyr::group_by (c3,c1) %>% \ndplyr::summarise(c2=dplyr::n(),..nrow=dplyr::n()) %>% \ndplyr::ungroup() %>% \ndplyr::mutate() %>% \ntidyr::complete(c3,c1) %>% \ndplyr::ungroup() %>% \ndplyr::arrange(dplyr::desc(c3),c1) %>% \n(function(df) {   `_tam_setCurrentVizDataCache`(df, type=\"groupby\", colnames=c(\"c3\"=\"Survived\", \"c1\"=\"Sex\", \"c2\"=\"(Number of Rows)\", \"..nrow\"=\"[remove]\"))\n  return (df);}) %>% \ndplyr::mutate(c3= (function(x) { if (!is.factor(x)) { return(forcats::fct_rev(factor(x))) } else { return(forcats::fct_rev(x))} })(c3)) %>% \n  `_tam_add_order_rows`( target=c(\"c3\",\"c1\"), \"c3\", \"c1\") %>% \n `_tam_convertLogicalToCharacter`()\n}\n, na=\"null\" , dataframe=\"columns\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"6.4.6.1","displayName":"Chart 2","sampleDataSize":0,"pivotColor":"none","_pivotValueSeparator":"|||","height":500,"width":800,"meas0EnableOtherGroup":null,"meas0NumGroupsToPreserve":null,"meas0ShowOtherGroup":null,"meas0OtherGroupLabel":null,"meas0OtherGroupValues":null,"colorBucketGroup":"all","xBucketGroup":"all","xReflineType":"none","yReflineRangeType":"none"},"timestamp":"2021-04-13T20:46:28.026Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":1,"_isDirty":false,"_createdVersion":"6.4.6.1","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"bya7Zpf3.json"}