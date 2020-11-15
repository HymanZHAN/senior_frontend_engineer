import Message from "./message";

/*
!!!key 如何取值
1. 同一个列表中 key 唯一（key 不能重复）
2. 组件更新前后，key 要保持不变

key 相对于我们加给 ReactNode 加 id



A，B，C，D
B, C, D, E

组件更新后，
  1. 生成新的虚拟DOM
  2. 对比新旧虚拟DOM，找出不一样的点
  3. 对不一样点进行真实的DOM更新



*/
function List(props) {
    const {data} = props;
    return <ul>
      {
        data.map(item=>{
            return <Message 
              key={item.id} 
              data={item}
            />
        })
      }
    </ul>
}

export default List;