<section class="card-blog" style="padding-top: 90px;">
    <div class="container">
        <div class="box-cat pt-md-50 pb-md-50 pt-xs-90 pb-xs-20">
            <?php $categoria = get_the_category()[0]; ?>
            <h1 class="bold c-yellow upper cat-single">
                <b><?= $categoria->name ?></b> </h1>

        </div>

        <div class="row">
            <?php
            $i = 1;
            if (have_posts()) : while (have_posts()) : the_post();
            ?>



                    <div class="col-md-4 col-12 pb-3">
                        <a href="<?php the_permalink(); ?>" class="" data-lightbox="roadtrip" data-title="">
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