<?php
/*
Template Name: Archives Page
*/

get_header();
global $post;
?>
       
    <div id="content" class="page col-full">
		<div id="main" class="col-left">
    	            
		<?php if ( isset( $woo_options['woo_breadcrumbs_show'] ) && $woo_options['woo_breadcrumbs_show'] == 'true' ) { ?>
			<div id="breadcrumbs">
				<?php woo_breadcrumbs(); ?>
			</div><!--/#breadcrumbs -->
		<?php } ?>  
			
			<div <?php post_class('drop-shadow lifted'); ?>>
			    
			    <h1 class="title"><?php the_title(); ?></h1>
			    
			    <div class="entry">
			    
		            <?php
		            	if ( have_posts() ) { the_post();
		            		the_content();
		            	}
		            ?>  
				    
				    <h3><?php _e( 'The Last 30 Posts', 'woothemes' ); ?></h3>
																	  
				    <ul>											  
				        <?php $query = new WP_Query( array( 'posts_per_page' => '30' ) ); ?>		  
				        <?php if ( $query->have_posts() ) { while ( $query->have_posts() ) { $query->the_post(); ?>	  
				            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a> - <?php the_time( get_option( 'date_format' ) ); ?> - <?php echo $post->comment_count; ?> <?php _e( 'comments', 'woothemes' ); ?></li>
				        <?php
				        		} // End WHILE Loop
				        	}
				        ?>					  
				    </ul>											  
					
					<div class="fl" style="width:50%">												  
					    <h3><?php _e( 'Categories', 'woothemes' ); ?></h3>	  
					    <ul>											  
					        <?php wp_list_categories( 'title_li=&hierarchical=0&show_count=1' ); ?>	
					    </ul>											  
					</div>				     												  

					<div class="fr" style="width:50%">												  
					    <h3><?php _e( 'Monthly Archives', 'woothemes' ); ?></h3>
																		  
					    <ul>											  
					        <?php wp_get_archives( 'type=monthly&show_post_count=1' ); ?>	
					    </ul>
					</div>		
					
					<div class="fix"></div>		     												  

				</div><!-- /.entry -->
			    			
            </div><!-- /.post -->
                
        </div><!-- /#main -->

        <?php get_sidebar(); ?>

    </div><!-- /#content -->
		
<?php get_footer(); ?>