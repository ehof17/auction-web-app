import {Request, Response, Router} from "express";
import {IUser} from "../models/IUser.ts";
import {loginUser, registerUser, checkUsername} from "../handlers/authenticate.ts";
const router = Router();

router.post("/login", async(req: Request<{},{},IUser>, res: Response) => {
    try {
        console.log(req.body); 
        const { username, password } = req.body;
        const success = await loginUser({ username, password });
    
        res.json({ authResult: success });
    
      } catch (error: any) {
        console.error("Login error in authRoutes:", error.message);
        res.status(500).json({ authResult: false, error: error.message });
      }
    });

router.post("/register", async (req: Request<{},{},IUser>, res: Response) => {
    try {
        console.log(req.body); 
        const { username, password } = req.body;
        const success = await registerUser({ username, password });
    
        res.json({ registerResult: success });
    
      } catch (error: any) {
        console.error("Register error in authRoutes:", error.message);
        res.status(500).json({ registerResult: false, error: error.message });
      }
    });


router.post("/checkUser", async (req: Request, res: Response) => {
    console.log("inside checkUser route");
    try {
        console.log(req.body); 
        const { username } = req.body;
        const success = await checkUsername(username);
        console.log(success);
        res.json({ userResult: success });
    
      } catch (error: any) {
        console.error("Check user error in authRoutes:", error.message);
        res.status(500).json({ userResult: false, error: error.message });
      }

})




export default router;