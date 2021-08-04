export type singlePost={
    id:number
    keyword:string;
    goal:string;
    matches:number;
    search_status:string
}

export type State={
    keywords:string[]
}

type setData={
    type:'SET_DATA',
    payload:string
}

type deleteData={
    type:'DELETE_DATA',
    payload:string
}

export type ActionType= setData | deleteData