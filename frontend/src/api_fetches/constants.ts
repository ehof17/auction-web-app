
export const API_PORT = 8000;
export const API_URL = `http://localhost:${API_PORT}`;
export const API_ENDPOINTS = {
    ADD_AUCTION_ITEM: `${API_URL}/auction/AddAuctionItem`,
    GET_AUCTION_ITEMS: `${API_URL}/auction/GetAuctionItems`,
    MAKE_BID: `${API_URL}/auction/MakeBid`,
    
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    CHECK_USER: `${API_URL}/auth/checkUser`
  };

