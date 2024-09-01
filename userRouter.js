const express = require('express')// Express framework'ünü projeye dahil edildi.Yaygın belgelendirme, performans ve güçlü topluluk desteği barındırdığı için tercih edildi.
const postgresClient=require('./config/db.js')//Veritabanı bağlantısı kurmak için postegresql istemcisini içeri aktarılması sağlandı. 
const router =express.Router()//Yeni bir router nesnesi oluşması sağlandı.Uygulamanın yönlendirme işlemini düzenli ve yönetilebilir hale getirmek amacıyla yazıldı.


//create user // Bu kod, hangi kullanıcının hangi habere erişmesi gerektiğini belirledikten sonra, ilgili haberin kullanıcının erişimine sunulması amacıyla yazıldı.
 router.post('/user',async(req,res)=>{// Kullanıcı ekleme işlemi için POST isteği yapıldı.
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text="INSERT INTO haber_user (user_id,haber_id) VALUES ($1,$2) RETURNING *"//Postegresql sorgusu kullanarak phone_list tablosuna girilen verilerin aktarılması amacıyla yazıldı. 

        const values=[req.body.user_id,req.body.haber_id]//Kullanıcı tarafından girilen verilerin user tablosundaki ilgili sütünlara aktarılması sağlandı. 
    
        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 //create haber// Bu kod bloğu haberler tablosuna haber eklemek amacıyla yazıldı.
 router.post('/haber',async(req,res)=>{
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text="INSERT INTO haberler (haber_basligi,haber_aciklama,haber_ekleme_tarihi,haber_update_tarihi,is_active,is_delete,image_url,document_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *"//Postegresql sorgusu kullanarak haberler tablosuna girilen verilerin aktarılması amacıyla yazıldı.

        const values=[req.body.haber_basligi,req.body.haber_aciklama,req.body.haber_ekleme_tarihi,req.body.haber_update_tarihi,req.body.is_active,req.body.is_delete,req.body.image_url,req.body.document_url]//Kullanıcı tarafından girilen verilerin haberler tablosundaki ilgili sütünlara aktarılması sağlandı.

        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
//create haber_birim// Bu kod bloğu haber_birim tablosuna haber birimlerine eklemek amacıyla yazıldı.
 router.post('/haber_birim',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text="INSERT INTO haber_birim (id,birim_id,haber_id,is_delete,is_active) VALUES ($1,$2,$3) RETURNING *"//Postegresql sorgusu kullanarak haber_birim tablosuna girilen verilerin aktarılması amacıyla yazıldı.

        const values=[req.body.id,req.body.birim_id,req.body.haber_id,req.body.is_delete,req.body.is_active]//Kullanıcı tarafından girilen verilerin haber_birim tablosundaki ilgili sütünlara aktarılması sağlandı.

        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 //create haber_kategori//  Bu kod bloğu haber_kategori tablosuna haber_kategori eklemek amacıyla yazıldı.
 router.post('/haber_kategori',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text="INSERT INTO haber_kategori (id,kategori_name,haber_id,kategori_id,is_delete,is_active) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *"//Postegresql sorgusu kullanarak haber_kategori tablosuna girilen verilerin aktarılması amacıyla yazıldı.

        const values=[req.body.id,req.body.kategori_name,req.body.haber_id,req.body.kategori_id,req.body.is_delete,req.body.is_active]//Kullanıcı tarafından girilen verilerin haber_kategori tablosundaki ilgili sütünlara aktarılması sağlandı.

        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })

 //create haber_like //  Bu kod bloğu haber_like tablosuna haber_like eklemek amacıyla yazıldı.
 router.post('/haber_like',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text="INSERT INTO haber_like (id,user_id,haber_id) VALUES ($1,$2,$3) RETURNING *"//Postegresql sorgusu kullanarak haber_like tablosuna girilen verilerin aktarılması amacıyla yazıldı.

        const values=[req.body.id,req.body.user_id,req.body.haber_id]//Kullanıcı tarafından girilen verilerin haber_like tablosundaki ilgili sütünlara aktarılması sağlandı.

        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })

// Create kategori//  Bu kod bloğu kategori tablosuna kategori eklemek amacıyla yazıldı.
router.post('/kategori', async (req, res) => {
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const text = "INSERT INTO kategori (id, kategori_name) VALUES ($1, $2) RETURNING *";//Postegresql sorgusu kullanarak kategori tablosuna girilen verilerin aktarılması amacıyla yazıldı.
        const values = [req.body.id, req.body.kategori_name];//Kullanıcı tarafından girilen verilerin kategori tablosundaki ilgili sütünlara aktarılması sağlandı.
        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 
        
        return res.status(201).json({data:rows})//kod bloğu başarılı olması durumunda 201 (created) durum bildiri kodu ile sonuç dönmesi sağlandı. 
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })


 // update haberler //  Bu kod bloğu haber_id tablosuna haber_id güncellemek amacıyla yazıldı.
router.put('/update/:haber_id',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{haber_id}= req.params// URL parametresinden gelen haber_id değeri alındı.
          
          const text="UPDATE haberler SET haber_basligi = $1, haber_aciklama = $2 ,haber_ekleme_tarihi = $3, haber_update_tarihi= $4, is_active =$5, is_delete =$6 image_url = $7,document_url = $8 Where haber_id = $9 RETURNING *" // Postegresql sorgusu tanımlanır: haberler tablosunda belirtilen haber_id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.haber_basligi,req.body.haber_aciklama,req.body.haber_ekeleme_tarihi,req.body.haber_update_tarihi,req.body.is_active,req.body.is_delete,req.body.image_url,req.body.document_url,haber_id]//Kullanıcı tarafından girilen verilerin haber_kategori tablosundaki ilgili sütünlara aktarılması sağlandı.

          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
   

 // update haber_birim //  Bu kod bloğu haber_birim tablosuna haber_birim güncellemek amacıyla yazıldı.
 router.put('/update/:haber_birim',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{id}= req.params// URL parametresinden gelen id değeri alındı.
          
          const text="UPDATE haber_birim SET birim_id = $1, haber_id = $2 ,is_delete =$3,is_active=$4 Where id=$5 RETURNING *"// Postegresql sorgusu tanımlanır: haber_birim tablosunda belirtilen id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.birim_id,req.body.haber_id,req.body.is_delete,req.body.is_active,id]//Kullanıcı tarafından girilen verilerin haber_birim tablosundaki ilgili sütünlara aktarılması sağlandı.


          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 // update haber_kategori //  Bu kod bloğu haber_kategori tablosuna haber_kategori güncellemek amacıyla yazıldı.
 router.put('/update/:haber_kategori',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{id}= req.params// URL parametresinden gelen id değeri alındı.
          
          const text="UPDATE haber_kategori SET kategori_name= $1 ,haber_id = $2, kategori_id = $3 ,is_delete = $4,is_active= $5 Where id=$6 RETURNING *"// Postegresql sorgusu tanımlanır: haber_kategori tablosunda belirtilen id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.kategori_name,req.body.haber_id,req.body.kategori_id,req.body.is_delete,req.body.is_active,id]//Kullanıcı tarafından girilen verilerin haber_kategori tablosundaki ilgili sütünlara aktarılması sağlandı.


          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 // update kategori //  Bu kod bloğu haber_kategori tablosuna haber_kategori güncellemek amacıyla yazıldı.
 router.put('/update/:kategori',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{id}= req.params// URL parametresinden gelen id değeri alındı.
          
          const text="UPDATE kategori SET kategori_name= $1 Where id=$2 RETURNING *"// Postegresql sorgusu tanımlanır: kategori tablosunda belirtilen id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.kategori,id]//Kullanıcı tarafından girilen verilerin kategori tablosundaki ilgili sütünlara aktarılması sağlandı.


          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 // update haber_like//  Bu kod bloğu haber_like tablosuna haber_like güncellemek amacıyla yazıldı.
 router.put('/update/haber_like:',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{id}= req.params// URL parametresinden gelen id değeri alındı.
          
          const text="UPDATE haber_like SET user_id= $1, haber_id = $2 Where id=$3 RETURNING *"// Postegresql sorgusu tanımlanır: haber_like tablosunda belirtilen id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.user_id,req.body.haber_id,id]//Kullanıcı tarafından girilen verilerin haber_like tablosundaki ilgili sütünlara aktarılması sağlandı.


          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
 // update haber user //  Bu kod bloğu haber_user tablosuna haber_user güncellemek amacıyla yazıldı.
 router.put('/update/haber_user:',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
          const{id}= req.params// URL parametresinden gelen id değeri alındı.
          
          const text="UPDATE haber_user SET id= $1, user_id = $2, haber_id = $3 Where id=$4 RETURNING *"// Postegresql sorgusu tanımlanır: haber_user tablosunda belirtilen id'ye sahip kaydın bilgileri güncellendi.
          const values=[req.body.user_id,req.body.user_id,req.body.haber_id,id]//Kullanıcı tarafından girilen verilerin haber_user tablosundaki ilgili sütünlara aktarılması sağlandı.


          const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

          if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
            return res.status(404).json({message:'User not found.'})
        return res.status(200).json({data:rows.rows[0]})
    } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
        
        console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
        
        return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
        
    }
 })
// delete haber birim //  Bu kod bloğu haber_birim tablosuna haber_birim silmek amacıyla yazıldı.
router.delete('/:haber_birim',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const{id}=req.params// URL parametresinden gelen id değeri alındı.

        const text="DELETE FROM haber_birim WHERE id=$ RETURNING *"//Postegresql sorgusu tanımlanır ve silinmesi istenen sütün silinir ve silinen bilgiler döndürülür.

        const values=[id]// Postegresql sorgusunda kullanılacak değerler bir dizi içinde tanımlandı. Dizinin tek elemanı olan id, silinecek kaydın id'si olarak tanımlandı.

        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

        if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
          return res.status(404).json({message:'User not found.'})
      return res.status(200).json({data:rows.rows[0]})
  } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
      
      console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
      
      return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
      
  }
})
// delete haber kategori //  Bu kod bloğu haber_kategori tablosuna haber_kategori silmek amacıyla yazıldı.
router.delete('/:haber_kategori',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const{id}=req.params// URL parametresinden gelen id değeri alındı.

        const text="DELETE FROM haber_kategori WHERE id=$ RETURNING *"//Postegresql sorgusu tanımlanır ve silinmesi istenen sütün silinir ve silinen bilgiler döndürülür.

        const values=[id]// Postegresql sorgusunda kullanılacak değerler bir dizi içinde tanımlandı. Dizinin tek elemanı olan id, silinecek kaydın id'si olarak tanımlandı.


        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

        if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
          return res.status(404).json({message:'User not found.'})
      return res.status(200).json({data:rows.rows[0]})
  } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
      
      console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
      
      return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
      
  }
})
// delete kategori //  Bu kod bloğu kategori tablosuna kategori silmek amacıyla yazıldı.
router.delete('/:kategori',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const{id}=req.params// URL parametresinden gelen id değeri alındı.

        const text="DELETE FROM kategori WHERE id=$ RETURNING *"//Postegresql sorgusu tanımlanır ve silinmesi istenen sütün silinir ve silinen bilgiler döndürülür.

        const values=[id]// Postegresql sorgusunda kullanılacak değerler bir dizi içinde tanımlandı. Dizinin tek elemanı olan id, silinecek kaydın id'si olarak tanımlandı.


        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

        if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
          return res.status(404).json({message:'User not found.'})
      return res.status(200).json({data:rows.rows[0]})
  } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
      
      console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
      
      return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
      
  }
})

// delete haber like //  Bu kod bloğu haber_like tablosuna haber_like silmek amacıyla yazıldı.
router.delete('/:haber_like',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const{id}=req.params// URL parametresinden gelen id değeri alındı.

        const text="DELETE FROM haber_like WHERE id=$ RETURNING *"//Postegresql sorgusu tanımlanır ve silinmesi istenen sütün silinir ve silinen bilgiler döndürülür.

        const values=[id]// Postegresql sorgusunda kullanılacak değerler bir dizi içinde tanımlandı. Dizinin tek elemanı olan id, silinecek kaydın id'si olarak tanımlandı.


        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

        if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
          return res.status(404).json({message:'User not found.'})
      return res.status(200).json({data:rows.rows[0]})
  } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
      
      console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
      
      return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
      
  }
})

// delete haber user //  Bu kod bloğu haber_user tablosuna haber_user silmek amacıyla yazıldı.
router.delete('/:haber_user',async(req,res)=>{
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const{id}=req.params// URL parametresinden gelen id değeri alındı.

        const text="DELETE FROM haber_user WHERE id=$ RETURNING *"//Postegresql sorgusu tanımlanır ve silinmesi istenen sütün silinir ve silinen bilgiler döndürülür.

        const values=[id]// Postegresql sorgusunda kullanılacak değerler bir dizi içinde tanımlandı. Dizinin tek elemanı olan id, silinecek kaydın id'si olarak tanımlandı.


        const {rows}= await postgresClient.query(text, values)//Postegresql veri tabanına yazılan insert sorgusu gönderildi ve dönen satırları alınması sağlandı. 

        if(!rows.length)//// Eğer güncellenmiş bir kayıt bulunmazsa, HTTP 404 (Not Found) durumu ile "User not found" mesajını döndürüldü.
          return res.status(404).json({message:'User not found.'})
      return res.status(200).json({data:rows.rows[0]})
  } catch (error) {// try bloğunun gerçekleşmemesi durumunda dönmesi gereken hata mesajlarını döndürmek amacıyla yazıldı. 
      
      console.log('Error accurred',error.message)//Hata oluşması durumunda oluşan hatayı  bildirmek amacıyla console ekranına error mesajı dönmesi sağlandı. 
      
      return res.status(400).json({message:error.message})//Hata oluşması durumunda oluşan hatayı aynı zamanda kullanıcıya bir hata olduğunu bildirmek amacıyla yazıldı. 
      
  }
})

// Haber silme (is_delete kullanarak) işlemi içim DELETE isteği //  Bu kod bloğu haberler tablosuna haberleri silmek amacıyla yazıldı.
router.delete('/haberler/:id', async (req, res) => {// URL paramatresinden haber_id değeri alındı.
 
    const { id } = req.params;// URL parametresinden gelen id değeri alındı.
    try {// haberler tablosunda belitrilen haber_id ile eşleşen kaydın is_delete kolonunu True olarak güncellenmesi sağlandı.
      const result = await pool.query(// Postegresql sorgusu,$1 yer tutucusunu id ile doldurması ve güncellenme yaptıktan sonra kayıdı geri döndörmesi sağlandı.
        `UPDATE haberler
         SET is_delete = TRUE
         WHERE haber_id = $1 RETURNING *`,
        [id]
      );
      if (result.rows.length === 0) {//Eğer sorgu sonucunda dönen satır sayısı sıfır , yani güncellenecek veya silinmiş bir kayıt elde edilmezse hata mesajı döndürülmesi sağlandı. 
        res.status(404).json({ error: 'Haber not found or already deleted' });
      } else {// Eğer yapılan sorgu sonucunda güncellenmiş kayıt bulunursa bu işlemi gerçekleşrtir.

        res.json({ message: 'Haber marked as deleted', data: result.rows.rows[0] });//Haber silindi olarak güncellendi mesajı verildi,güncellenmiş olan veri döndürüldü.
      }
    } catch (err) {
      res.status(500).json({ error: err.message });// Hata olması durumunda HTTP 500 (Internal Server Error) sunucu kaynaklı bir sorun olduğu bilgisi döndürüldü.
    }
     
  });


// GET işlemleri

// Kullanıcıları listeleme işlemi için GET isteği //  Bu kod bloğu users tablosundaki users listelemek amacıyla yazıldı.
router.get('/users', async (req, res) => {
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const result = await pool.query("SELECT * FROM haber_user");// haber_user tablosundaki tüm kullanıcılar getirildi.
        res.json(result.rows.rows); // Sorgu sonucunda elde edilen veriyi HTTP 200 (OK) durumu ile JSON formatında döndürüldü.
    } catch (err) {
        res.status(500).json({ error: err.message });// Hata olması durumunda HTTP 500 (Internal Server Error) sunucu kaynaklı bir sorun olduğu bilgisi döndürüldü.
      }
    });
// Haberleri listeleme  işlemi için GET isteği //  Bu kod bloğu haberler tablosundaki haberleri listelemek amacıyla yazıldı.
router.get('/haberler', async (req, res) => {
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const result = await pool.query("SELECT * FROM haberler WHERE is_delete = FALSE");// haberler tablosundaki is_delete=FALSE olan yani silinmemiş olan tüm kayıtların listelenmesi sağlandı.
        res.json(result.rows.rows);// Sorgu sonucunda elde edilen veriyi HTTP 200 (OK) durumu ile JSON formatında döndürüldü.
    } catch (error) {
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});
// Haber-kategorileri listeleme //  Bu kod bloğu haber-kategori tablosundaki haber-kategorileri listelemek amacıyla yazıldı.
router.get('/haber-kategori', async (req, res) => {
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const result = await pool.query("SELECT * FROM haber_kategori");// Haber kategorilerin tamamını listelemek amacıyla  postegresql kodu yazıldı.
        res.json(result.rows.rows);// Sorgu sonucunda elde edilen veriyi HTTP 200 (OK) durumu ile JSON formatında döndürüldü.
    } catch (error) {
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});


// Haber-like'ları listeleme //  Bu kod bloğu haber-like tablosundaki haber-like listelemek amacıyla yazıldı.
router.get('/haber-like', async (req, res) => {
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const result = await pool.query("SELECT * FROM haber_like");//Personellerin beğenilerini getirmek amacıyla  postegresql kodu yazıldı.
        res.json(result.rows.rows);// Sorgu sonucunda elde edilen veriyi HTTP 200 (OK) durumu ile JSON formatında döndürüldü.
    } catch (error) {
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});

// Kullanıcı bir haberi beğendiğinde kayıt ekle 
router.post('/haber-like', async (req, res) => {
   
        try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const { user_id, haber_id } = req.body;// İstek gövdesinden user_id ve haber_id değerleri aldındı.

        // Kullanıcının bu haberi daha önce beğenip beğenmediğini kontrol edildi
        const checkText = "SELECT * FROM haber_like WHERE user_id = $1 AND haber_id = $2";// Postegresql sorgusu çalıştırıldı ve mevcut beğeniler kontrol edildi.
        
        if (existingRows.length > 0) {// Eğer kullanıcı bu haberi daha önceden beğenme işlemini gerçekleştirmişse uyarı mesajı ile karşılaşması sağlandı.Birden çok beğeni atması engellendi.
            return res.status(200).json({ message: 'Haber zaten beğenilmiş.' });
        }
        const checkValues = [user_id, haber_id];
        const { rows: existingRows } = await postgresClient.query(checkText, checkValues);

        // Kullanıcı ve haber ilişkisinin beğenme kaydını eklendi
        const insertText = "INSERT INTO haber_like (user_id, haber_id) VALUES ($1, $2) RETURNING *";
        const insertValues = [user_id, haber_id];
        const { rows } = await postgresClient.query(insertText, insertValues);// Yazılan sql sorgusunu çalıştırıldı ve beğenme kaydı döndürüldü.

        return res.status(201).json({ data: rows.rows[0] });// Yapılan işlem başarılı olursa eklenen beğenme sayısı ve kaydı döndürüldü.
    } catch (error) {// Hata olduğunda mesaj döndürüldü
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});
// Haber oluşturma istegi için POST istegi
router.post('/haber', async (req, res) => {
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const { haber_basligi, haber_aciklama, haber_ekleme_tarihi, haber_update_tarihi, is_active, is_delete, image_url, document_url, birimler } = req.body;// İstek gövdesinden gelen haber bilgilesi ve birimler listesi alındı.

        // Haber  bilgilerini haberler tablosunda eklemek amacıyla postegresql sorgusu yazılarak içerik veri tabanına eklendi.
        const insertHaberText = "INSERT INTO haberler (haber_basligi, haber_aciklama, haber_ekleme_tarihi, haber_update_tarihi, is_active, is_delete, image_url, document_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING haber_id";
        const insertHaberValues = [haber_basligi, haber_aciklama, haber_ekleme_tarihi, haber_update_tarihi, is_active, is_delete, image_url, document_url];
        const { rows: haberRows } = await client.query(insertHaberText, insertHaberValues);

        const haber_id = haberRows[0].haber_id;// Eklenen haberin haber_id'si alındı.

        // Birimleri ekle
        for (const birim of birimler) {// İçeriği aktarılan haber içeriği teker teker bilgilendirilmesi gereken birimlere gönderildi.
            const insertBirimText = "INSERT INTO haber_birim (birim_id, haber_id,is_delete,is_active) VALUES ($1, $2)";
            const insertBirimValues = [birim.birim_id, haber_id,is_delete,is_active];
            await client.query(insertBirimText, insertBirimValues);
        }

        return res.status(201).json({ message: 'Haber ve birimler başarıyla oluşturuldu.' });// İşlem başarılı olması durumunda başarılı mesajı verildi.
    } catch (error) {// Try  bloğu çalışırken bir sorun ile karşılaşması durumunda catch bloğu devreye girerek hata mesajı döndürüldü.
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});
// Haber güncelleme
router.put('/haber/:haber_id', async (req, res) => {// Put isteği ile belirtilen ID'ye sahip olan haber güncellendi.
 
    try {//try catch kullanılmasının amacı işlem gerçekleştirilebildiği durumda işlemi gerçekleştirmek işlem gerçekleştirilmediğinde hata mesajı döndürülmesi sağlandı. 
        const { haber_id } = req.params;//Url parametresinden gelen haber_id alındı.
        const { haber_basligi, haber_aciklama, haber_ekleme_tarihi, haber_update_tarihi, is_active, is_delete, image_url, document_url, birimler } = req.body;// İstek gövdesinden gelen haber bilgileri alındı.

        // Haber güncelle
        const updateHaberText = "UPDATE haberler SET haber_basligi = $1, haber_aciklama = $2, haber_ekleme_tarihi = $3, haber_update_tarihi = $4, is_active = $5, is_delete = $6, image_url = $7, document_url = $8 WHERE haber_id = $9 RETURNING *";// Postegresql sorgusu ile haber bilgileri güncellendi.
        const updateHaberValues = [haber_basligi, haber_aciklama, haber_ekleme_tarihi, haber_update_tarihi, is_active, is_delete, image_url, document_url, haber_id];// Sorguya eklenecek olan değerler belirlendi.
        const { rows: haberRows } = await client.query(updateHaberText, updateHaberValues);// Yazılan postegresql sorgusu çalıştırıldı ve güncellenmiş haber bilgileri alındı.

        // Mevcut birimleri sil
        await client.query("DELETE FROM haber_birim WHERE haber_id = $1", [haber_id]);// Eski birimler silindi.

        // Yeni birimleri ekle
        for (const birim of birimler) {// Yeni birimlerin listesi üzerinde döngü başlatıldı.
            const insertBirimText = "INSERT INTO haber_birim (birim_id, haber_id,is_delete,is_active) VALUES ($1, $2)";//Postegresql sorgusu ile de yeni birimler eklendi.
            const insertBirimValues = [birim.birim_id, haber_id,is_delete,is_active];// Sorguya eklenecek değerler belirlendi.
            await client.query(insertBirimText, insertBirimValues);// Postegresql sorgusu çalıştırıldı ve yeni birimler eklendi.
        }

        return res.status(200).json({ message: 'Haber ve birimler başarıyla güncellendi.' });// İşlem başarılı olduğunda işlemin başarı ile gerçekleştirildiğine dair mesaj döndürüldü.
    } catch (error) {// Try  bloğu çalışırken bir sorun ile karşılaşması durumunda catch bloğu devreye girerek hata mesajı döndürüldü.
        console.log('Error occurred', error.message);//Hata olması durumunda hata mesajını konsol ekranına yazdırılması sağlandı.
        return res.status(400).json({ message: error.message });//  Hata olması durumunda hata mesajını kullanıcıya iletmek için yazıldı.
    }
});



module.exports=router// 'router' nesnesini dışa aktarır, böylece diğer dosyalarda bu modülü 'require' ederek kullanılabilir hale getirildi. Bu, Express.js rotalarını modüler ve yeniden kullanılabilir hale getirildi.