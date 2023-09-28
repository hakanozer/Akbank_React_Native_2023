import { IProduct } from "../models/IProducts";
import { LikesEnum } from "../useRedux/LikesEnum";
import { likesGetData, likesSetData } from "../utils/storage";

export interface ILikeAction {
  type: LikesEnum,
  payload: IProduct
}


export const LikesReducer = (state: IProduct[] = [], action: ILikeAction) => {

  switch(action.type) {

    case LikesEnum.LIKE_ADD:
      const indexa = state.findIndex((item) => item.id === action.payload.id)
      if (indexa == -1) {
        const newArr = [...state, action.payload]
        likesSetData(newArr)
        return newArr
      }
    return state
    
    case LikesEnum.LIKE_REMOVE:
      const index = state.findIndex((item) => item.id === action.payload.id)
      const newArrX = Object.assign([], state)
      if ( index > -1 ) {
        newArrX.splice(index, 1)
        likesSetData(newArrX)
        return newArrX
      }
    return state

    default:
    return state
  }

}