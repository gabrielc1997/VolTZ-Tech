<section class="post" style="padding-top: 130px;">
    <div class="container">

        <div class="row d-flex flex-column align-items-center justify-content-center">


            <?php while (have_posts()) : the_post(); ?>
                <div class="col-12 d-flex justify-content-center">

                    <?php
                    if (get_the_post_thumbnail($value->ID)) {
                        echo get_the_post_thumbnail(
                            $value->ID,
                            $size = 'post-thumbnail',
                            array(
                                'class' => 'img-fluid',

                            ),

                        );
                    } else {
                    ?>
                        <img src="http://via.placeholder.com/650x400" class="d-none" alt="" />
                    <?php } ?>




                </div>
                <div class="col-md-8 col-8">
                    <h1 class="pt-5"><?php the_title(); ?></h1>

                    <p class="pt-3"><?php the_content(); ?></p>

                    </a>
                    <div class="overlay"></div>
                </div>
            <?php endwhile; ?>

        </div>

    </div>
</section>