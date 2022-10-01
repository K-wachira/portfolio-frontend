import express from "express";
import PostsController from "./posts.controller.js";
import ElementsController from "./elements.controller.js";

const router = express.Router();

router.route("/all_posts").get(PostsController.apiGetPosts);
router.route("/post_by_id").get(PostsController.apiGetPostById);
router.route("/categories").get(PostsController.apiGetCategories);
router.route("/tags").get(PostsController.apiGetTags);
router.route("/publish").post(PostsController.apiPublishPost);

router
  .route("/post")
  .post(PostsController.apiNewPost) // New Post upload
  .put(PostsController.apiUpdatePost) // Edit of existing post
  .delete(PostsController.apiDeletePost); // Delete existing posts

router
  .route("/element")
  .post(ElementsController.apiPostElement) // New element upload
  .put(ElementsController.apiUpdateElement) // Modify Existing element
  .delete(ElementsController.apiDeleteElement); //Delete existing element

export default router;