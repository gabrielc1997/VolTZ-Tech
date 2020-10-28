<section class="card-blog">
    <div class="container">


        <div class="row">

            <?php

            query_posts(array('category_name' => 'blog'));
            $i = 1;
            if (have_posts()) : while (have_posts()) : the_post();
            ?>



                    <div class="col-md-4 col-12 pb-3">
                        <a href="<?php the_permalink(); ?>" class="" data-lightbox="roadtrip" data-title="<?php the_content(); ?>">
                            <div class="content-card-post bgc-white">
                                <?php
                                if (get_the_post_thumbnail($value->ID)) {
                                    echo get_the_post_thumbnail($value->ID, $size = 'post-thumbnail', array('class' => 'img-fluid'));
                                } else {
                                ?>
                                    <img src="http://via.placeholder.com/650x400" class="d-none" alt="" />
                                <?php } ?>
                                <div class="content-text">
                                    <?php $categoria = get_the_category()[0]; ?>
                                    <p class="<?= $class_color[$categoria->term_id] ?> upper category-style">
                                        <?= $categoria->name ?>
                                    </p>

                                    <h3 class=""><?php the_title(); ?></h3>
                                    <p class=""><?= get_the_excerpt(); ?></p>

                                    <p class="pt-sm-30 recent-post-date">
                                        <?php the_time(get_option('date_format')); ?>

                                        | Por
                                        <?php the_author_posts_link() ?>
                                    </p>
                                </div>

                            </div>
                        </a>

                    </div>


                <?php $i++;
                endwhile; ?>

            <?php endif; ?>

        </div>
    </div>
</section>