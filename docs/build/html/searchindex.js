Search.setIndex({docnames:["sanskrit_data","sanskrit_data_db","sanskrit_data_db_couchdb","sanskrit_data_db_mongodb","sanskrit_data_schema","sanskrit_data_schema_books","sanskrit_data_schema_common","sanskrit_data_schema_ullekhanam","sanskrit_data_schema_users"],envversion:52,filenames:["sanskrit_data.rst","sanskrit_data_db.rst","sanskrit_data_db_couchdb.rst","sanskrit_data_db_mongodb.rst","sanskrit_data_schema.rst","sanskrit_data_schema_books.rst","sanskrit_data_schema_common.rst","sanskrit_data_schema_ullekhanam.rst","sanskrit_data_schema_users.rst"],objects:{"":{sanskrit_data:[0,0,0,"-"]},"sanskrit_data.db":{ClientInterface:[1,1,1,""],DbInterface:[1,1,1,""],couchdb:[2,0,0,"-"],mongodb:[3,0,0,"-"]},"sanskrit_data.db.ClientInterface":{delete_database:[1,2,1,""],get_database:[1,2,1,""],get_database_interface:[1,2,1,""]},"sanskrit_data.db.DbInterface":{delete_doc:[1,2,1,""],find:[1,2,1,""],find_by_id:[1,2,1,""],find_by_indexed_key:[1,2,1,""],find_one:[1,2,1,""],update_doc:[1,2,1,""]},"sanskrit_data.db.couchdb":{CloudantApiClient:[2,1,1,""],CloudantApiDatabase:[2,1,1,""],CouchdbApiClient:[2,1,1,""],CouchdbApiDatabase:[2,1,1,""],strip_revision:[2,3,1,""]},"sanskrit_data.db.couchdb.CloudantApiClient":{delete_database:[2,2,1,""],get_database:[2,2,1,""],get_database_interface:[2,2,1,""]},"sanskrit_data.db.couchdb.CloudantApiDatabase":{update_doc:[2,2,1,""]},"sanskrit_data.db.couchdb.CouchdbApiClient":{delete_database:[2,2,1,""],get_database:[2,2,1,""],get_database_interface:[2,2,1,""]},"sanskrit_data.db.couchdb.CouchdbApiDatabase":{delete_doc:[2,2,1,""],find:[2,2,1,""],find_by_id:[2,2,1,""],find_by_indexed_key:[2,2,1,""],set_revision:[2,2,1,""],update_doc:[2,2,1,""]},"sanskrit_data.db.mongodb":{Client:[3,1,1,""],Collection:[3,1,1,""]},"sanskrit_data.db.mongodb.Client":{delete_database:[3,2,1,""],get_database:[3,2,1,""],get_database_interface:[3,2,1,""],get_db_collection_names:[3,2,1,""]},"sanskrit_data.db.mongodb.Collection":{delete_doc:[3,2,1,""],find:[3,2,1,""],find_by_id:[3,2,1,""],find_one:[3,2,1,""],update_doc:[3,2,1,""]},"sanskrit_data.schema":{books:[5,0,0,"-"],common:[6,0,0,"-"],ullekhanam:[7,0,0,"-"],users:[8,0,0,"-"]},"sanskrit_data.schema.books":{BookPortion:[5,1,1,""],BookPositionTarget:[5,1,1,""]},"sanskrit_data.schema.books.BookPortion":{from_details:[5,4,1,""],from_path:[5,4,1,""],get_allowed_target_classes:[5,4,1,""],schema:[5,5,1,""],target_class:[5,5,1,""]},"sanskrit_data.schema.books.BookPositionTarget":{from_details:[5,4,1,""],schema:[5,5,1,""]},"sanskrit_data.schema.common":{JsonObject:[6,1,1,""],JsonObjectNode:[6,1,1,""],JsonObjectWithTarget:[6,1,1,""],Target:[6,1,1,""],TargetValidationError:[6,6,1,""],TextContent:[6,1,1,""],check_class:[6,3,1,""],check_list_item_types:[6,3,1,""],get_schemas:[6,3,1,""],recursively_merge:[6,3,1,""],update_json_class_index:[6,3,1,""]},"sanskrit_data.schema.common.JsonObject":{delete_in_collection:[6,2,1,""],dump_to_file:[6,2,1,""],equals_ignore_id:[6,2,1,""],from_id:[6,4,1,""],get_json_map_list:[6,4,1,""],get_jsonpickle_typeid:[6,4,1,""],get_wire_typeid:[6,4,1,""],make_from_dict:[6,4,1,""],make_from_dict_list:[6,4,1,""],make_from_pickledstring:[6,4,1,""],read_from_file:[6,4,1,""],schema:[6,5,1,""],set_from_dict:[6,2,1,""],set_from_id:[6,2,1,""],set_jsonpickle_type_recursively:[6,2,1,""],set_type:[6,2,1,""],set_type_recursively:[6,2,1,""],to_json_map:[6,2,1,""],update_collection:[6,2,1,""],validate:[6,2,1,""],validate_schema:[6,2,1,""]},"sanskrit_data.schema.common.JsonObjectNode":{delete_in_collection:[6,2,1,""],fill_descendents:[6,2,1,""],from_details:[6,4,1,""],schema:[6,5,1,""],update_collection:[6,2,1,""],validate:[6,2,1,""]},"sanskrit_data.schema.common.JsonObjectWithTarget":{get_allowed_target_classes:[6,4,1,""],get_targetting_entities:[6,2,1,""],schema:[6,5,1,""],target_class:[6,5,1,""],validate:[6,2,1,""],validate_targets:[6,2,1,""]},"sanskrit_data.schema.common.Target":{from_containers:[6,4,1,""],from_details:[6,4,1,""],from_ids:[6,4,1,""],get_target_entity:[6,2,1,""],schema:[6,5,1,""]},"sanskrit_data.schema.common.TextContent":{from_details:[6,4,1,""],schema:[6,5,1,""]},"sanskrit_data.schema.ullekhanam":{Annotation:[7,1,1,""],AnnotationSource:[7,1,1,""],CommentAnnotation:[7,1,1,""],ImageAnnotation:[7,1,1,""],ImageTarget:[7,1,1,""],PadaAnnotation:[7,1,1,""],Rectangle:[7,1,1,""],SamaasaAnnotation:[7,1,1,""],SandhiAnnotation:[7,1,1,""],SubantaAnnotation:[7,1,1,""],TextAnnotation:[7,1,1,""],TextOffsetAddress:[7,1,1,""],TextSambandhaAnnotation:[7,1,1,""],TextTarget:[7,1,1,""],TinantaAnnotation:[7,1,1,""]},"sanskrit_data.schema.ullekhanam.Annotation":{get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""],set_base_details:[7,2,1,""],validate:[7,2,1,""]},"sanskrit_data.schema.ullekhanam.AnnotationSource":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.CommentAnnotation":{get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.ImageAnnotation":{from_details:[7,4,1,""],get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""],target_class:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.ImageTarget":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.PadaAnnotation":{from_details:[7,4,1,""],get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""],set_base_details:[7,2,1,""],target_class:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.Rectangle":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.SamaasaAnnotation":{from_details:[7,4,1,""],get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""],validate:[7,2,1,""]},"sanskrit_data.schema.ullekhanam.SandhiAnnotation":{from_details:[7,4,1,""],get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.SubantaAnnotation":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.TextAnnotation":{from_details:[7,4,1,""],get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.TextOffsetAddress":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.TextSambandhaAnnotation":{get_allowed_target_classes:[7,4,1,""],schema:[7,5,1,""],validate:[7,2,1,""]},"sanskrit_data.schema.ullekhanam.TextTarget":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.ullekhanam.TinantaAnnotation":{from_details:[7,4,1,""],schema:[7,5,1,""]},"sanskrit_data.schema.users":{AuthenticationInfo:[8,1,1,""],User:[8,1,1,""],UserPermission:[8,1,1,""]},"sanskrit_data.schema.users.AuthenticationInfo":{VEDAVAAPI_AUTH:[8,5,1,""],check_password:[8,2,1,""],from_details:[8,4,1,""],get_user_id:[8,2,1,""],schema:[8,5,1,""],set_password:[8,2,1,""]},"sanskrit_data.schema.users.User":{check_permission:[8,2,1,""],from_details:[8,4,1,""],get_user_ids:[8,2,1,""],schema:[8,5,1,""]},"sanskrit_data.schema.users.UserPermission":{from_details:[8,4,1,""],schema:[8,5,1,""]},sanskrit_data:{db:[1,0,0,"-"],schema:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","classmethod","Python class method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:classmethod","5":"py:attribute","6":"py:exception"},terms:{"abstract":1,"boolean":6,"case":4,"class":[0,1,2,3,4,5,6,7,8],"enum":[5,6,7,8],"function":6,"import":6,"null":6,"return":[1,2,3,6],"switch":[1,4],"try":4,"while":[1,4],But:4,For:[4,5],Not:1,One:[1,6],Such:7,The:[1,7],Then:7,_id:1,_rev:2,abl:4,accept:6,access:[0,1],achiev:1,action:8,acycl:[6,7],admin:8,advantag:4,affix:7,aim:1,alia:[5,6,7],all:[5,6],allow:8,allowed_typ:6,alreadi:1,ani:[5,6,7],annot:[0,7],annotationsourc:7,anoth:[5,7],anu:7,anyth:7,argument:1,arrai:[5,6,7,8],ashir:7,associ:[4,7],assum:6,auth_provid:8,auth_secret_bcrypt:8,auth_secret_hash:8,auth_user_id:8,authentication_info:8,authenticationinfo:8,author:5,automat:4,automodul:[],avail:[4,6],availab:[],avoid:[4,7],avyaya:7,base:[1,4],base_data:5,basic:[],befor:6,being:[4,7],better:1,between:[4,7],book:[0,7],bookport:[5,7],bookpositiontarget:5,bot:8,both:4,bother:3,call:6,camelcas:4,can:[1,5,7],canon:6,caption:[],care:6,categori:7,certain:4,chapter:5,check_class:6,check_list_item_typ:6,check_password:8,check_permiss:8,children:6,classmethod:[5,6,7,8],client:[1,3],clientinterfac:1,cloudantapicli:2,cloudantapidatabas:2,code:4,coder:[],collect:3,com:[],combined_str:7,come:7,comment:7,commentannot:7,common:[0,1,4],commun:4,comp:7,compon:7,component_pada:7,concis:0,conflict:[4,7],connect:7,consist:5,construct:6,consumpt:4,contain:[0,5,6,7],container_id:[5,6,7],content:[6,7],contribut:4,conveni:[4,6],convent:4,correspond:[0,4,7],couchdb:[0,1],couchdbapicli:2,couchdbapidatabas:2,could:[1,5],creat:1,curated_cont:5,dag:7,data:[0,5],databas:[0,1,3,4,6],db_collection_str:3,db_interfac:[5,6,7],db_name:[1,2,3],dbinterfac:1,decreas:0,defin:[1,4,5,6],delet:[1,3],delete_databas:[1,2,3],delete_doc:[1,2,3],delete_in_collect:6,depth:6,describ:[4,5,7],descript:[5,6,7,8],deseri:6,design:0,detail:0,determin:1,dict:[1,6],differ:4,direct:[6,7],doc:[1,2,3],doc_id:[1,2,3],doc_map:2,doe:[1,3,4,7],doesnt:6,doubt:4,down:1,dump_to_fil:6,each:4,easili:[1,4],element:4,els:1,enabl:1,encod:[5,6,7],end:7,entiti:[6,7],entity_typ:6,equals_ignore_id:6,etc:5,everi:4,exampl:[6,7],except:6,exist:[1,4],expos:1,express:8,extant:4,extens:4,extract:[],field:[4,6,7],file:0,filenam:6,fill_descend:6,filter:[1,2,3],find:[0,1,2,3],find_by_id:[1,2,3],find_by_indexed_kei:[1,2],find_on:[1,3],fine:[1,4],first:7,follow:7,format:[4,7],found:[1,6],from:[1,4,6,7],from_contain:6,from_detail:[5,6,7,8],from_id:6,from_path:5,futur:8,gener:[0,1,6],get:[1,5],get_allowed_target_class:[5,6,7],get_databas:[1,2,3],get_database_interfac:[1,2,3],get_db_collection_nam:3,get_json_map_list:6,get_jsonpickle_typeid:6,get_mongo_cli:[],get_schema:6,get_target_ent:6,get_targetting_ent:6,get_user_id:8,get_wire_typeid:6,getting_start:[],github:0,github_root:[],given:5,goal:0,googl:8,grammat:7,graph:[6,7],half:5,has:7,have:[4,6,7],here:[4,5,7],hierarchi:4,hint:4,host:[],http:[],human:[4,7,8],identifi:7,imag:[5,7],imageannot:7,imagetarget:7,implement:1,includ:7,independ:4,index:0,index_nam:[1,2],indic:[],inherit:[],input_dict:6,input_dict_list:6,insert:1,instanti:1,integ:7,interest:0,interfac:[0,1,4],interpret:3,intro:0,introduct:0,involv:6,item:[5,6,7,8],iter:1,itself:2,jargon:4,json:[0,1,4,5,6,7],json_class_index:6,jsonclass:[4,5,6,7,8],jsonobject:[1,4,6,7],jsonobjectnod:6,jsonobjectwithtarget:6,just:[3,4,6,7],keep:4,kei:[1,2],keyword:[1,4,7],lakara:[4,7],lan:7,languag:[4,5,6,7],lat:7,latter:4,let:[6,7],librari:4,like:3,lin:7,line:[1,5],linga:7,list:[4,5],lit:7,lot:[4,7],lun:7,lut:7,machin:7,madhyama:7,mai:[1,6],make_from_dict:6,make_from_dict_list:6,make_from_pickledstr:6,mango:1,mani:[5,6],map:[4,6],match:1,maxdepth:[],maximum:4,maxlength:5,member:6,method:6,mindmap:[5,7],minlength:7,mix:4,mod:[],model:4,modifi:1,modul:[0,1,4],module_in:6,mongo:1,mongodb:[0,1],more:1,most:4,motiv:0,multipl:7,must:6,name:[1,3,4],napum:7,nearli:7,need:[1,5,7],neutral:1,nicknam:8,node:7,none:[1,5,6,7,8],note:6,noth:[1,6],number:5,obj:6,object:[1,3,5,6,7,8],offset_address:7,one:[1,5],onli:5,oper:1,option:4,order:[0,1,5],other:[4,6,7],our:[0,6,8],outsid:1,packag:[1,4],pada:7,pada_index:7,padaannot:7,page:0,pair:7,param:[1,3],paramet:[1,2,3,6],part:5,particular:7,path:5,perfrom:6,permiss:8,pick:[4,7],pickl:6,plain_password:8,pleas:[0,4],pointer:7,popul:6,popular:4,portion:7,portion_class:5,posit:5,possibl:4,potenti:[4,6],prathama:7,predetermin:8,prefer:4,prefix:7,present:4,prevent:4,principl:0,program:4,project:0,properli:6,properti:[5,6,7,8],provid:0,pum:7,purusha:7,python:[0,1],queri:1,rather:7,read:8,read_from_fil:6,readm:0,rectangl:7,recursively_merg:6,refer:[4,5],regular:8,reinvent:4,render:4,repres:[1,5,6,8],requir:[5,6,7,8],respect:0,right:5,roga:7,roman:4,root:[0,4,7],samaasaannot:7,samasta:7,sambodhana:7,sandhi_typ:7,sandhiannot:7,sanskrit:4,sanskrit_data:[],satat:7,satata:7,schema:0,score:7,script:4,search:0,second:7,see:4,seek:5,sentenc:[5,7],separ:4,serial:[0,4,6],server:1,servic:8,set:[1,6],set_base_detail:7,set_from_dict:6,set_from_id:6,set_jsonpickle_type_recurs:6,set_password:8,set_revis:2,set_typ:6,set_type_recurs:6,shabda:7,shabda_id:7,shabda_index:7,share:4,should:[1,4,6,8],show:[],similar:[],simpl:7,slp1:4,some:7,some_collect:3,some_list:6,somecollect:3,somedb:3,someth:7,sort:5,sourc:[1,2,3,5,6,7,8],source_:7,source_text_pada:7,source_typ:[4,7],specif:4,specifi:7,start:7,store:[4,5,6,7],str:1,strii:7,string:[3,5,6,7,8],strip_revis:2,sub:[0,7],subanta:7,subantaannot:7,subclass:[1,6],substr:7,suitabl:[1,4],sup:7,superior:4,support:1,suppos:7,system:1,system_inf:7,tabl:[],take:[4,6],target:[5,6,7],target_class:[5,6,7],target_id:6,target_obj:6,target_text_pada:7,targetting_obj:6,targetvalidationerror:6,technolog:4,text:[5,6,7],textannot:7,textcont:[5,6,7],textoffsetaddress:7,textsambandhaannot:7,texttarget:7,than:7,thei:6,them:[4,5],thi:[0,1,4,5,6,7],through:[1,4],time:4,tin:7,tinanta:7,tinantaannot:7,titl:5,to_json_map:6,transliter:4,tree:[5,6,7],two:7,type:[4,5,6,7,8],ullekhanam:[0,4,8],underscore_cas:4,undoc:[],unit:5,unk:[6,7],updat:[1,5,7],update_collect:6,update_doc:[1,2,3],update_json_class_index:6,url:[2,3],use:[1,4,6],used:[1,4],useful:6,user:[0,4],user_suppli:7,user_typ:8,userpermiss:8,uses:1,using:[1,6],util:0,uttama:7,vachana:7,valid:[4,6,7],validate_schema:6,validate_target:6,valu:[4,5,6,8],variou:[0,4],vedavaapi:8,vedavaapi_auth:8,vers:5,vibakti:4,vibhakti:[4,7],vidhi:7,view:0,vigraha:7,vyakarana:4,wai:[6,7],want:4,wast:4,when:[4,6],where:[0,4],which:[1,3,4,5,7],within:[3,5,7],without:2,word:[4,7],write:8,x81di:7,x81dirog:7,x81g:7,x81ga:7,x81n:7,x81nu:7,xa3a:7,xa3akt:7,xb1j:7,xb9:7,xc3:7,xc4:7,xe1:7,yield:1,you:0,your:4},titles:["sanskrit_data\u2019s documentation","sanskrit_data.db","sanskrit_data.db.couchdb","sanskrit_data.db.mongodb","sanskrit_data.schema","sanskrit_data.schema.books","sanskrit_data.schema.common","sanskrit_data.schema.ullekhanam","sanskrit_data.schema.users"],titleterms:{annot:4,book:[4,5],common:6,contain:4,couchdb:2,data:4,design:4,document:0,gener:4,indic:0,intro:[4,5,7],mongodb:3,principl:4,python:4,sanskrit_data:[0,1,2,3,4,5,6,7,8],schema:[4,5,6,7,8],tabl:0,ullekhanam:7,user:8,util:4,welcom:[]}})