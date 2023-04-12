import { configureStore } from '@reduxjs/toolkit'
import news from './slices/news.slice'
import isLoading from './slices/isLoading.slice'
import purchases from './slices/Purchases.slice'

export default configureStore({
    reducer: {
        news,
        isLoading,
        purchases,
    
    }
})
