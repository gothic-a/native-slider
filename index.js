import {productCard} from './modules/productCard.js'
import './styles/common.scss'

let boots = [{id: 1, name: 'new balance', price: 299, model: 'MS997JEC', sizes: [42, 43, 44, 45], describe: 'Mesh, lace-up front, logo patch on the side, contrast heel and chunky rubber sole.', images: ['https://media.newbalance.ua/images/8f/80/182451a8600ce7502738b94adff6.jpg', 'https://media.newbalance.ua/images/ce/27/a6c492e7f9030aec8629e9080af5.jpg', 'https://media.newbalance.ua/images/4b/5a/201433a442d1fff79d763db1fbd7.jpg', 'https://media.newbalance.ua/images/a9/7c/3b0af1a42eb752516d934f109c72.jpg']},
{id: 2, name: 'new balance', price: 305, model: 'MS997JEb', sizes: [41, 44, 45], describe: 'Mesh, lace-up front, logo patch on the side, contrast heel and chunky rubber sole.', images: ['https://media.newbalance.ua/images/b1/a6/9e41d106cb6b6f0556feddc50070.jpg', 'https://media.newbalance.ua/images/cf/5a/e79a5ebb131b2c674d4df4c7f26f.jpg', 'https://media.newbalance.ua/images/55/22/36423465a81ad07f2fd30a843ebb.jpg']},
{id: 3, name: 'new balance', price: 205, model: 'MS327SFA', sizes: [43, 46], describe: 'Mesh, lace-up front, logo patch on the side, contrast heel and chunky rubber sole.', images: ['https://media.newbalance.ua/images/66/25/849291336d2949785c6053666e0a.jpg', 'https://media.newbalance.ua/images/77/ef/24b6eb526a1b0053e808c5fd8a1c.jpg', 'https://media.newbalance.ua/images/d9/09/abd9160c29f17ecf9d7f96bab9e7.jpg', 'https://media.newbalance.ua/images/3a/66/275522e410a8a90ddbcdd124d99b.jpg']}]

boots.forEach(item => {
    new productCard('.container', item)
})





